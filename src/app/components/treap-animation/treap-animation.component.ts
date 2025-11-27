import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

class TreapNode {
  key: number;
  priority: number;
  left: TreapNode | null = null;
  right: TreapNode | null = null;
  constructor(key: number, priority?: number) {
    this.key = key;
    this.priority = priority ?? Math.floor(Math.random() * 100);
  }
}

@Component({
  selector: 'app-treap-animation',
  imports: [CommonModule, FormsModule],
  templateUrl: './treap-animation.component.html',
  styleUrl: './treap-animation.component.css'
})
export class TreapAnimationComponent {
 root: TreapNode | null = null;

  insertValue = '';
  deleteValue = '';
  searchValue = '';

  nodes: Array<{ id: number; key: number; pr: number; x: number; y: number; highlight?: boolean }> = [];
  edges: Array<{ x1: number; y1: number; x2: number; y2: number }> = [];

  // dimensões dinâmicas
  svgW = 360;
  svgH = 260;

  private idMap = new Map<TreapNode, number>();
  private nextId = 1;
  private highlightedKey: number | null = null;

  // rotações
  private rotateRight(y: TreapNode): TreapNode {
    const x = y.left!;
    const T2 = x.right;
    x.right = y;
    y.left = T2;
    return x;
  }
  private rotateLeft(x: TreapNode): TreapNode {
    const y = x.right!;
    const T2 = y.left;
    y.left = x;
    x.right = T2;
    return y;
  }

  // inserção
  private _insert(root: TreapNode | null, key: number): TreapNode {
    if (!root) return new TreapNode(key);
    if (key === root.key) return root;
    if (key < root.key) {
      root.left = this._insert(root.left, key);
      if (root.left && root.left.priority > root.priority) {
        root = this.rotateRight(root);
      }
    } else {
      root.right = this._insert(root.right, key);
      if (root.right && root.right.priority > root.priority) {
        root = this.rotateLeft(root);
      }
    }
    return root;
  }

  // busca
  private _search(root: TreapNode | null, key: number): TreapNode | null {
    while (root) {
      if (key === root.key) return root;
      root = key < root.key ? root.left : root.right;
    }
    return null;
  }

  // remoção
  private _delete(root: TreapNode | null, key: number): TreapNode | null {
    if (!root) return null;
    if (key < root.key) {
      root.left = this._delete(root.left, key);
    } else if (key > root.key) {
      root.right = this._delete(root.right, key);
    } else {
      if (!root.left && !root.right) {
        return null;
      } else if (!root.left) {
        root = this.rotateLeft(root);
        root.left = this._delete(root.left, key);
      } else if (!root.right) {
        root = this.rotateRight(root);
        root.right = this._delete(root.right, key);
      } else {
        if (root.left.priority > root.right.priority) {
          root = this.rotateRight(root);
          root.right = this._delete(root.right, key);
        } else {
          root = this.rotateLeft(root);
          root.left = this._delete(root.left, key);
        }
      }
    }
    return root;
  }

  // handlers
  handleInsert() {
    const v = parseInt(this.insertValue, 10);
    if (isNaN(v)) return;
    this.root = this._insert(this.root, v);
    this.insertValue = '';
    this.updateLayout(v);
  }
  handleDelete() {
    const v = parseInt(this.deleteValue, 10);
    if (isNaN(v)) return;
    this.root = this._delete(this.root, v);
    this.deleteValue = '';
    // se remover o nó destacado, limpa a borda
    if (this.highlightedKey === v) this.highlightedKey = null;
    this.updateLayout();
  }
  handleSearch() {
    const v = parseInt(this.searchValue, 10);
    if (isNaN(v)) return;
    const node = this._search(this.root, v);
    // define destaque ANTES de recalcular layout
    this.highlightedKey = node ? node.key : null;
    this.updateLayout();
  }
  clear() {
    this.root = null;
    this.highlightedKey = null;
    this.updateLayout();
  }

  // layout dinâmico
  private updateLayout(highlightKey?: number) {
    this.nodes = [];
    this.edges = [];
    this.idMap.clear();
    this.nextId = 1;

    if (!this.root) {
      this.svgW = 360;
      this.svgH = 260;
      return;
    }

    const countNodes = (n: TreapNode | null): number =>
      n ? 1 + countNodes(n.left) + countNodes(n.right) : 0;
    const height = (n: TreapNode | null): number =>
      n ? 1 + Math.max(height(n.left), height(n.right)) : 0;

    const total = countNodes(this.root);
    const levels = height(this.root);

    // largura cresce com nós (limitada)
    const baseW = 360;
    const extraW = Math.min(1400, Math.max(0, total - 3) * 90);
    this.svgW = baseW + extraW;

    // altura cresce com níveis (limitada)
    const baseH = 260;
    const extraH = Math.min(900, Math.max(0, levels - 3) * 100);
    this.svgH = baseH + extraH;

    const dfsPlace = (n: TreapNode | null, x: number, y: number, gap: number) => {
      if (!n) return;
      if (!this.idMap.has(n)) this.idMap.set(n, this.nextId++);
      const id = this.idMap.get(n)!;
      this.nodes.push({
        id,
        key: n.key,
        pr: n.priority,
        x,
        y,
       highlight: this.highlightedKey !== null && n.key === this.highlightedKey
      });
      const childY = y + 90;
      if (n.left) {
        const lx = x - gap;
        this.edges.push({ x1: x, y1: y, x2: lx, y2: childY });
        dfsPlace(n.left, lx, childY, Math.max(40, gap * 0.55));
      }
      if (n.right) {
        const rx = x + gap;
        this.edges.push({ x1: x, y1: y, x2: rx, y2: childY });
        dfsPlace(n.right, rx, childY, Math.max(40, gap * 0.55));
      }
    };

    dfsPlace(this.root, this.svgW / 2, 50, Math.max(60, this.svgW / 5));
  }

  
}
