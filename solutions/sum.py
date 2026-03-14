# LeetCode 1 - Two Sum (Easy)
# Two Sum

def twoSum(nums, target):
    seen = {}

    for i in range(len(nums)):
        need = target - nums[i]

        if need in seen:
            return [seen[need], i]

        seen[nums[i]] = i


# example
print(twoSum([2, 7, 11, 15], 9))  
