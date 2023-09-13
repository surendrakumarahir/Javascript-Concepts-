/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}
//[1,2,4]

let list1 = new ListNode(1)
list1.next = new ListNode(2)
list1.next.next = new ListNode(4)

//[1,3,4]
let list2 = new ListNode(1)
list2.next = new ListNode(3)
list2.next.next = new ListNode(4)

var mergeTwoLists = function (list1, list2) {
  let mergedHead = { val: -1, next: null }
  let crt = mergedHead
  while (list1 && list2) {
    if (list1.val > list2.val) {
      crt.next = list2
      list2 = list2.next
    } else {
      crt.next = list1
      list1 = list1.next
    }
    crt = crt.next
  }
  crt.next = list1 || list2
  return mergedHead.next
}
//console.log(list1, list2)
console.log(JSON.stringify(mergeTwoLists(list1, list2)))
