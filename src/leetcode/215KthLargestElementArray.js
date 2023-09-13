/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function heappush(heap, newKey) {
  // push the new key
  heap.push(newKey)

  // get the current index of pushed key
  let curr = heap.length - 1

  // keep comparing till root is reached or we terminate in middle
  while (curr > 0) {
    let parent = Math.floor((curr - 1) / 2)
    if (heap[curr] < heap[parent]) {
      // quick swap
      ;[heap[curr], heap[parent]] = [heap[parent], heap[curr]]
      // update the index of newKey
      curr = parent
    } else {
      // if no swap, break, since we heap is stable now
      break
    }
  }
}

function heappop(heap) {
  // swap root with last node
  const n = heap.length
  ;[heap[0], heap[n - 1]] = [heap[n - 1], heap[0]]

  // remove the root i.e. the last item (because of swap)
  const removedKey = heap.pop()

  let curr = 0

  // keep going till atleast left child is possible for current node
  while (2 * curr + 1 < heap.length) {
    const leftIndex = 2 * curr + 1
    const rightIndex = 2 * curr + 2
    const minChildIndex =
      rightIndex < heap.length && heap[rightIndex] < heap[leftIndex]
        ? rightIndex
        : leftIndex
    if (heap[minChildIndex] < heap[curr]) {
      // quick swap, if smaller of two children is smaller than the parent (min-heap)
      ;[heap[minChildIndex], heap[curr]] = [heap[curr], heap[minChildIndex]]
      curr = minChildIndex
    } else {
      break
    }
  }

  // finally return the removed key
  return removedKey
}
var findKthLargest = function (nums, k) {
  const heap = []
  for (let item of nums) {
    heappush(heap, -item)
  }
  for (let i = 0; i < k - 1; i++) {
    heappop(heap)
  }

  return -heap[0]
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2))
