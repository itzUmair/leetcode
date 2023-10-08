/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  const uniqueEl = [];

  const newHead = head;

  let curNode = head;
  let prevNode = null;

  while (curNode) {
    if (!uniqueEl.includes(curNode.val)) {
      uniqueEl.push(curNode.val);
      prevNode = curNode;
      curNode = curNode.next;
    } else {
      prevNode.next = curNode.next;
      curNode = curNode.next;
    }
  }

  return newHead;
};
