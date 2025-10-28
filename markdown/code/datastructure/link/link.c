#include <stdio.h>
#include <stdlib.h>

typedef int ElemType;
typedef int Status;



typedef struct LNode {
    ElemType data;
    struct LNode *next;
} LNode, *LinkList;

// 初始化带头结点的单链表
Status InitList(LinkList &L) {
    L = (LinkList)malloc(sizeof(LNode));
    if (!L) {
        return ERROR;
    }
    L->next = NULL;
    return OK;
}

// 在第 i 个位置插入元素 e
Status ListInsert(LinkList &L, int i, ElemType e) {
    if (i < 1) {
        return ERROR; // 位置不合法
    }
    LNode *p = L;
    int j = 0;
    while (p && j < i - 1) {
        p = p->next;
        j++;
    }
    if (!p || j > i - 1) {
        return ERROR; // 位置不合法
    }
    LNode *newNode = (LNode *)malloc(sizeof(LNode));
    newNode->data = e;
    newNode->next = p->next;
    p->next = newNode;
    return OK;
}



// 打印链表元素
void PrintList(LinkList L) {
    LNode *p = L->next;
    while (p) {
        printf("%d ", p->data);
        p = p->next;
    }
    printf("\n");
}

int main() {
    LinkList L;
    InitList(L);

    // 插入元素
    for (int i = 1; i <= 5; i++) {
        ListInsert(L, i, i * 2);
    }

    printf("原始链表：");
    PrintList(L);

    // 删除第 i 个位置的元素
    ElemType deletedElem;
    int deletePosition = 3;
    if (ListDelete_L(L, deletePosition, deletedElem) == OK) {
        printf("删除第 %d 个位置的元素：%d\n", deletePosition, deletedElem);
        printf("删除后链表：");
        PrintList(L);
    } else {
        printf("删除失败，位置不合法。\n");
    }

    return 0;
}
