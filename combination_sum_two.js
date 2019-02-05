var combinationSum2 = function (candidates, target) {
    if (candidates.length === 0) return []
    let res = []
    candidates.sort((a, b) => {
      return a - b
    })
    backTrack(candidates, target, [], 0)
    return res
  
    function backTrack(nums, target, p, start) {
      if (target === 0)
        return res.push(p.slice())
      for (let i = start; i < nums.length && target >= nums[i]; i++) {
        if (i !== start && nums[i] === nums[i - 1]  )
          continue
        p.push(nums[i])
        backTrack(nums, target - nums[i], p, i + 1)
        p.pop()
      }
      return
    }
  };