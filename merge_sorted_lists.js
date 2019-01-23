var mergeTwoLists = function(h1, h2) {
    if (!h1 || !h2) // return the non-empty one
        return h1 || h2

    if (h1.val>h2.val) // swap to make sure h1 is always smaller than h2
        [h1, h2] = [h2, h1]
    
    h1.next = mergeTwoLists(h1.next, h2)
    
    return h1;
};