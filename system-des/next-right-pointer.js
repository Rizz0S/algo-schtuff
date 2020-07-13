/*Given a binary tree

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.

Follow up:

You may only use constant extra space.
Recursive approach is fine, you may assume implicit stack space does not count as extra space for this problem.*/

function connect(root) {
    if (!root) {
        return root
    }
    
	let queue = [];

	queue.push(root);

	while (queue.length > 0) {
		let size = queue.length;

		for (let i = 0; i < size; i++) {
			let current = queue.shift();
			current.next = i === size - 1 ? null : queue[0]

			if (current.left) {
				queue.push(current.left);
			}
			if (current.right) {
				queue.push(current.right);
			}
		}
	}

	return root;
}