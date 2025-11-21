import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

export enum NodeColor {
  RED = 'RED',
  BLACK = 'BLACK'
}

export class RBNode {
  value: number;
  color: NodeColor;
  left: RBNode | null = null;
  right: RBNode | null = null;
  parent: RBNode | null = null;
  constructor(value: number, color: NodeColor = NodeColor.RED) {
    this.value = value;
    this.color = color;
  }
}

export class RedBlackTree {
  root: RBNode | null = null;

  insert(value: number): void {
    const newNode = new RBNode(value);
    if (!this.root) {
      this.root = newNode;
      this.root.color = NodeColor.BLACK;
      return;
    }
    let current = this.root;
    let parent: RBNode | null = null;
    while (current) {
      parent = current;
      if (value < current.value) current = current.left!;
      else if (value > current.value) current = current.right!;
      else return; // ignore duplicate
    }
    newNode.parent = parent;
    if (value < parent!.value) parent!.left = newNode;
    else parent!.right = newNode;
    this.fixInsert(newNode);
  }

  private rotateLeft(node: RBNode): void {
    const y = node.right!;
    node.right = y.left;
    if (y.left) y.left.parent = node;
    y.parent = node.parent;
    if (!node.parent) this.root = y;
    else if (node === node.parent.left) node.parent.left = y;
    else node.parent.right = y;
    y.left = node;
    node.parent = y;
  }

  private rotateRight(node: RBNode): void {
    const x = node.left!;
    node.left = x.right;
    if (x.right) x.right.parent = node;
    x.parent = node.parent;
    if (!node.parent) this.root = x;
    else if (node === node.parent.right) node.parent.right = x;
    else node.parent.left = x;
    x.right = node;
    node.parent = x;
  }

  private fixInsert(node: RBNode): void {
    while (node.parent && node.parent.color === NodeColor.RED) {
      if (node.parent === node.parent.parent?.left) {
        const uncle = node.parent.parent.right;
        if (uncle && uncle.color === NodeColor.RED) {
          node.parent.color = NodeColor.BLACK;
          uncle.color = NodeColor.BLACK;
            node.parent.parent.color = NodeColor.RED;
          node = node.parent.parent;
        } else {
          if (node === node.parent.right) {
            node = node.parent;
            this.rotateLeft(node);
          }
          node.parent!.color = NodeColor.BLACK;
          node.parent!.parent!.color = NodeColor.RED;
          this.rotateRight(node.parent!.parent!);
        }
      } else {
        const uncle = node.parent.parent?.left;
        if (uncle && uncle.color === NodeColor.RED) {
          node.parent.color = NodeColor.BLACK;
          uncle.color = NodeColor.BLACK;
          node.parent.parent!.color = NodeColor.RED;
          node = node.parent.parent!;
        } else {
          if (node === node.parent.left) {
            node = node.parent;
            this.rotateRight(node);
          }
          node.parent!.color = NodeColor.BLACK;
          node.parent!.parent!.color = NodeColor.RED;
          this.rotateLeft(node.parent!.parent!);
        }
      }
    }
    this.root!.color = NodeColor.BLACK;
  }

  delete(value: number): boolean {
    let z = this.root;
    while (z) {
      if (value < z.value) z = z.left;
      else if (value > z.value) z = z.right;
      else break;
    }
    if (!z) return false;

    let y = z;
    let yOriginalColor = y.color;
    let x: RBNode | null;

    if (!z.left) {
      x = z.right;
      this.transplant(z, z.right);
    } else if (!z.right) {
      x = z.left;
      this.transplant(z, z.left);
    } else {
      y = this.minimum(z.right);
      yOriginalColor = y.color;
      x = y.right;
      if (y.parent === z) {
        if (x) x.parent = y;
      } else {
        this.transplant(y, y.right);
        y.right = z.right;
        y.right!.parent = y;
      }
      this.transplant(z, y);
      y.left = z.left;
      y.left!.parent = y;
      y.color = z.color;
    }
    if (yOriginalColor === NodeColor.BLACK) this.fixDelete(x);
    return true;
  }

  private transplant(u: RBNode, v: RBNode | null): void {
    if (!u.parent) this.root = v;
    else if (u === u.parent.left) u.parent.left = v;
    else u.parent.right = v;
    if (v) v.parent = u.parent;
  }

  private minimum(node: RBNode): RBNode {
    while (node.left) node = node.left;
    return node;
  }

  private fixDelete(node: RBNode | null): void {
    while (node !== this.root && node?.color === NodeColor.BLACK) {
      if (node === node?.parent?.left) {
        let sibling = node.parent.right;
        if (sibling?.color === NodeColor.RED) {
          sibling.color = NodeColor.BLACK;
          node.parent.color = NodeColor.RED;
          this.rotateLeft(node.parent);
          sibling = node.parent.right;
        }
        if ((sibling?.left?.color ?? NodeColor.BLACK) === NodeColor.BLACK &&
            (sibling?.right?.color ?? NodeColor.BLACK) === NodeColor.BLACK) {
          if (sibling) sibling.color = NodeColor.RED;
          node = node.parent;
        } else {
          if ((sibling?.right?.color ?? NodeColor.BLACK) === NodeColor.BLACK) {
            if (sibling?.left) sibling.left.color = NodeColor.BLACK;
            if (sibling) sibling.color = NodeColor.RED;
            if (sibling) this.rotateRight(sibling);
            sibling = node.parent.right;
          }
          if (sibling) sibling.color = node.parent!.color;
          node.parent!.color = NodeColor.BLACK;
          if (sibling?.right) sibling.right.color = NodeColor.BLACK;
          this.rotateLeft(node.parent!);
          node = this.root;
        }
      } else {
        let sibling = node?.parent?.left;
        if (sibling?.color === NodeColor.RED) {
          sibling.color = NodeColor.BLACK;
          node!.parent!.color = NodeColor.RED;
          this.rotateRight(node!.parent!);
          sibling = node!.parent!.left;
        }
        if ((sibling?.right?.color ?? NodeColor.BLACK) === NodeColor.BLACK &&
            (sibling?.left?.color ?? NodeColor.BLACK) === NodeColor.BLACK) {
          if (sibling) sibling.color = NodeColor.RED;
          node = node!.parent!;
        } else {
          if ((sibling?.left?.color ?? NodeColor.BLACK) === NodeColor.BLACK) {
            if (sibling?.right) sibling.right.color = NodeColor.BLACK;
            if (sibling) sibling.color = NodeColor.RED;
            if (sibling) this.rotateLeft(sibling);
            sibling = node!.parent!.left;
          }
          if (sibling) sibling.color = node!.parent!.color;
          node!.parent!.color = NodeColor.BLACK;
          if (sibling?.left) sibling.left.color = NodeColor.BLACK;
          this.rotateRight(node!.parent!);
          node = this.root;
        }
      }
    }
    if (node) node.color = NodeColor.BLACK;
  }

  toArray(): RBNode[] {
    const out: RBNode[] = [];
    const dfs = (n: RBNode | null) => {
      if (!n) return;
      out.push(n);
      dfs(n.left);
      dfs(n.right);
    };
    dfs(this.root);
    return out;
  }
}

interface PositionedNode {
  node: RBNode;
  x: number;
  y: number;
}
interface EdgeLine {
  x1: number; y1: number; x2: number; y2: number;
}

@Component({
  selector: 'app-arvore-red-black',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './arvore-red-black.component.html',
  styleUrl: './arvore-red-black.component.css'
})
export class ArvoreRedBlackComponent {
  tree = new RedBlackTree();
  insertValue = '';
  deleteValue = '';
  nodes: PositionedNode[] = [];
  edges: EdgeLine[] = [];
  svgWidth = 900;
  svgHeight = 600;

  handleInsert() {
    const v = parseInt(this.insertValue, 10);
    if (!isNaN(v)) {
      this.tree.insert(v);
      this.insertValue = '';
      this.layout();
    }
  }

  handleDelete() {
    const v = parseInt(this.deleteValue, 10);
    if (!isNaN(v)) {
      this.tree.delete(v);
      this.deleteValue = '';
      this.layout();
    }
  }

  private layout() {
    this.nodes = [];
    this.edges = [];
    if (!this.tree.root) return;
    this.place(this.tree.root, this.svgWidth / 2, 50, this.svgWidth / 4);
  }

  private place(node: RBNode | null, x: number, y: number, gap: number) {
    if (!node) return;
    this.nodes.push({ node, x, y });
    const childY = y + 100;
    if (node.left) {
      const lx = x - gap;
      this.edges.push({ x1: x, y1: y, x2: lx, y2: childY });
      this.place(node.left, lx, childY, gap / 2);
    }
    if (node.right) {
      const rx = x + gap;
      this.edges.push({ x1: x, y1: y, x2: rx, y2: childY });
      this.place(node.right, rx, childY, gap / 2);
    }
  }
}
