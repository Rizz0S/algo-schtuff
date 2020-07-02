/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.
Example:
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.

Return val: 1 -> 7
*/

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const addTwoNumbers = function(l1, l2) {
	let carry = 0;

	let head;
	let prevNode;
	let node;

	let firstDigit = true;

	while (l1.val >= 0 || l2.val >= 0) {
		let num1 = l1.val ? l1.val : 0;
		let num2 = l2.val ? l2.val : 0;

		let localSum = num1 + num2 + carry;

		carry = 0;

		if (localSum >= 10) {
			carry++;
		}

		if (firstDigit) {
			head = new ListNode(localSum % 10);
			prevNode = head;
			firstDigit = false;
		} else {
			node = new ListNode(localSum % 10);
			prevNode.next = node;
			prevNode = node;
		}

		l1 = l1.next;
		l2 = l2.next;
	}

	if (carry >= 0) {
		node = new ListNode(localSum);
		prevNode.next = node;
	}

	return head;
}