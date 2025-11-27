import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TreapAnimationComponent } from '../../components/treap-animation/treap-animation.component';

@Component({
  selector: 'app-treap',
  imports: [CommonModule, RouterModule, TreapAnimationComponent],
  templateUrl: './treap.component.html',
  styleUrl: './treap.component.css'
})
export class TreapComponent {
  comparisonData = [
    {
      structure: "Treap",
      insertion: "O(log n) esperado",
      search: "O(log n) esperado",
      deletion: "O(log n) esperado",
      balancing: "Probabilístico (via prioridades)",
      advantages: "Simples, sem regras de balanceamento complexas",
    },
    {
      structure: "AVL Tree",
      insertion: "O(log n) garantido",
      search: "O(log n) garantido",
      deletion: "O(log n) garantido",
      balancing: "Rigoroso (altura balanceada)",
      advantages: "Busca mais rápida, altura estritamente balanceada",
    },
    {
      structure: "Red-Black Tree",
      insertion: "O(log n) garantido",
      search: "O(log n) garantido",
      deletion: "O(log n) garantido",
      balancing: "Moderado (cor dos nós)",
      advantages: "Menos rotações que AVL, boa performance geral",
    },
  ];

  cCode = `#include <stdio.h>
#include <stdlib.h>
#include <time.h>

typedef struct Node {
    int key;
    int priority;
    struct Node *left, *right;
} Node;

Node* createNode(int key) {
    Node* node = (Node*)malloc(sizeof(Node));
    node->key = key;
    node->priority = rand() % 100;
    node->left = node->right = NULL;
    return node;
}

Node* rotateRight(Node* y) {
    Node* x = y->left;
    Node* T2 = x->right;
    x->right = y;
    y->left = T2;
    return x;
}

Node* rotateLeft(Node* x) {
    Node* y = x->right;
    Node* T2 = y->left;
    y->left = x;
    x->right = T2;
    return y;
}

Node* insert(Node* root, int key) {
    if (root == NULL)
        return createNode(key);
        
    if (key < root->key) {
        root->left = insert(root->left, key);
        if (root->left->priority > root->priority)
            root = rotateRight(root);
    } else {
        root->right = insert(root->right, key);
        if (root->right->priority > root->priority)
            root = rotateLeft(root);
    }
    return root;
}

int main() {
    srand(time(NULL));
    Node* root = NULL;
    
    root = insert(root, 50);
    root = insert(root, 30);
    root = insert(root, 70);
    root = insert(root, 20);
    root = insert(root, 40);
    
    return 0;
}`;

}
