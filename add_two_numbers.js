// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

var addTwoNumbers = function(l1, l2) {
    let cur = new ListNode(0),  dummy = new ListNode(0),  carry = 0;
    dummy.next = cur;
    while (l1 || l2 || carry !== 0) {
        let sum = carry + (l1 === null ? 0 : l1.val) + (l2 === null ? 0 : l2.val);
        l1 = l1 === null ? null : l1.next;
        l2 = l2 === null ? null : l2.next;
        carry = (sum >= 10 ? 1 : 0);
        cur.next = new ListNode(sum % 10);
        cur = cur.next;
    }
    return dummy.next.next;
};