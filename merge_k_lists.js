var mergeKLists = function(lists) {
    if (!lists || !lists.length) {
        return null;
    }

    function doMergeKlists(lists, left, right) {
        if (left == right) {
            return lists[left];
        }

        let mid = Math.floor((left + right) / 2);
        let l1 = doMergeKlists(lists, left, mid);
        let l2 = doMergeKlists(lists, mid + 1, right);
        return merge(l1, l2);
    }
    
    function merge(l1, l2) {
        if (!l1 || !l2) {
            return l1 || l2 || null;
        }

        let curr = new ListNode();
        let head = curr;

        while(l1 && l2) {
            if (l1.val < l2.val) {
                curr.next = l1;
                l1 = l1.next;
            } else {
                curr.next = l2;
                l2 = l2.next;
            }

            curr = curr.next;
        }

        if (l1) {
            curr.next = l1;
        } else {
            curr.next = l2;
        }

        return head.next;
    }

    return doMergeKlists(lists, 0, lists.length - 1);
};