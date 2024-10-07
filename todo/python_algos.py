# class Solution(object):
#     def majorityElement(self, nums):
#         """
#         :type nums: List[int]
#         :rtype: int
#         """

#         codex = {}
#         for num in nums:
#             if num in codex:
#                 codex[num]+= 1
#             else:
#                 codex[num] = 1
        
#         max_val = max(codex.values())
#         result = list(filter(lambda x: codex[x] == max_val, codex))
#         return result
        
#     majorityElement([3,2,3]) # [3]


#     # In this part of the session, you will be solving the following problem:
# # Return the sum of the numbers in the array, except ignore sections of numbers starting with a 7 and extending to the next 8 (every 7 will be followed by at least one 8). Return 0 for no numbers.

# # sum78([1, 2, 2]) → 5
# # sum78([1, 2, 2, 7, 99, 99, 8]) → 5
# # sum78([1, 1, 7, 8, 2]) → 4
    
# def sum78(nums):
#     total = 0
#     skip = False
#     for num in nums:
#         if num == 7:
#             skip = True
#         if not skip:
#             total += num
#         if num == 8:
#             skip = False
#     return total



# def two2(nums):
#     # declare result varible assigned intially to an empty array 
#     # loop over the input array
#     # the current num multiple that by two 
#     # covert the prdocut of the num times two to a string 
#     # determine if the multiplied number ends in two if the last element in the string is a 2 
#     # not a 2 then I will add it to the result array 
#     # after the loop simply return the result array 

#     result = []
#     for num in nums:
#         product = num * 2
#         strProd = str(product)
#         if strProd[-1] != '2':
#             result.append(product)
#     return result

# res = two2([1, 2, 3]) # [4, 6]


# def pairForSum(nums, target):
#     # declare a result array 
#     # loop over the input array 
#     # loop over the input array 
#     # if the sum of the two elements is equal to the target 
#     # then add the two elements to the result array 
#     # return the result array 

#     result = []
#     for i in range(len(nums)):
#         for j in range(i+1, len(nums)):
#             if nums[i] + nums[j] == target:
#                 result.append(i, j)
#     return result

def anagramVerification (s, t):
    # declare a result variable assigned to an empty dictionary 
    # loop over the first string 
    # if the character is in the dictionary then increment the value by one 
    # else add the character to the dictionary and assign it to one 
    # loop over the second string 
    # if the character is in the dictionary then decrement the value by one 
    # else add the character to the dictionary and assign it to one 
    # loop over the values in the dictionary 
    # if the value is not equal to zero then return false 
    # return true 

    codex = {}
    for char in s:
        if char in codex:
            codex[char] += 1
        else:
            codex[char] = 1
    for char in t:
        if char in codex:
            codex[char] -= 1
        else:
            codex[char] = 1
    for val in codex.values():
        if val != 0:
            return False
    return True

print(anagramVerification("anagram", "nagaram")) # True


# Determine if two provided words are anagrams of each other.
# An anagram is defined as a word obtained by rearranging the letters of another word, using all the original letters exactly once.
# For this verification, input consists of two strings: 's' representing the first word, and 't' for the second word.
# The goal is to return true if 't' is an anagram of 's', otherwise, return false.
 
# Example 1:
# Input: s = "anagram", t = "nagaram"
# Output: true
 
# Example 2:
# Input: s = "rat", t = "car"
# Output: false
 
# Constraints:
# - The length of both strings 's' and 't' will be in the range of 1 to 50,000.
# - Both strings will contain only lowercase English letters.

# def is_anagram(s, t):


    # Write your plan below
    #######################
    # first check if the length of s and t are the same if not return false 
    # create a dictionary to keep track of character occurences 
    # loop over t string and add the characters and character counts for each 
    # after completion dictionary will contain 
    # loop over the second string then comparing it to the dictionary 
    # determine if the character is in the dictionary if so 
    # decrement count until 1 when count reaches 1 delete the key value pair 
    # if the current character is not in the dictionary then return false 
    # if the length of the dictionary is 0 return true
    #######################

    # if len(t) != len(s): return False
    # codex = {}
    # for char in t:
    #     if char in codex:
    #         codex[char] += 1
    #     else:
    #         codex[char] = 1
    # for char in s:
    #     if char not in codex:
    #         return False
    #     if char in codex:
    #         codex[char] -= 1
    #         if codex[char] == 0:
    #             del codex[char]
    #         if len(codex) == 0:
    #           return True

def reverseString(s): 
    # declare a left variable assigned to zero 
    # declare a right variable assigned to the length of the string minus one 
    # loop over the string while the left is less than the right 
    # swap the left and right elements 
    # increment the left and decrement the right 
    # return the string 

    left = 0
    right = len(s) - 1
    while left < right:
        # s[left], s[right] = s[right], s[left]
        swapped = s[left]
        s[left] = s[right]
        s[right] = swapped
        left += 1
        right -= 1
    return s

print(reverseString(["h","e","l","l","o"])) # ["o","l","l","e","h"]


def linked_list_sum(head):
    # declare a result variable assigned to zero 
    # loop over the linked list 
    # add the value of the current node to the result 
    # return the result 

    result = 0
    current = head
    while current is not None:
        result += current.val
        current = current.next
    return result

def reverse_list(head):
  pass # todo
  current = head
  prev = None
  while current is not None:
    next = current.next
    current.next = prev
    prev = current
    current = next
  return prev
    
# depth first search
# stack = [root] append and pop

#breadth first search
# queue = [root] append and pop(0)

def tree_sum(root):
  pass # todo
  if root is None:
    return 0
  sum = 0
  tree_vals = [ root ]
  while tree_vals:
    current = tree_vals.pop()
    sum += current.val
    if current.left:
      tree_vals.append(current.left)
    if current.right:
      tree_vals.append(current.right)
  return sum

# GRAPH NOTES:
# graph = nodes and edges great at modeling relationships
# directed graph - one way edges
# undirected graph - two way edges A -> B and B -> A
# create adjacency list - dictionary with keys as nodes and values as edges
# {
#   'A': ['B', 'C'],
#   'B': ['A', 'D'],
#   'C': ['A', 'E'],
#   'D': ['B', 'E'],
# }
# graph traversal - visiting every node in a graph
# depth first search - stack
# breadth first search - queue 
# from collections import deque
# queue = deque([root]) append and popleft


# create an adjacency list from a edge list
def create_adjacency_list(edges):
  pass # todo
  adjacency_list = {}
  for edge in edges:
    a, b = edge
    if a not in adjacency_list:
      adjacency_list[a] = []
    if b not in adjacency_list:
      adjacency_list[b] = []
    adjacency_list[a].append(b)
    adjacency_list[b].append(a)
  return adjacency_list

def undirected_path(edges, node_A, node_B):
  graph = build_graph(edges)
  return has_path(graph, node_A, node_B, set())

def build_graph(edges):
  graph = {}
  
  for edge in edges:
    a, b = edge
    
    if a not in graph:
      graph[a] = []
    if b not in graph:
      graph[b] = []
      
    graph[a].append(b)
    graph[b].append(a)
    
  return graph
    
def has_path(graph, src, dst, visited):
  if src == dst:
    return True
  
  if src in visited:
    return False
  
  visited.add(src)
  
  for neighbor in graph[src]:
    if has_path(graph, neighbor, dst, visited) == True:
      return True
    
  return False


# Imagine you're looking at a side view of terrain represented as a series of blocks with varying heights, each block being exactly 1 unit wide.
# Your task is to calculate the maximum volume of rainwater that could be collected between the blocks after a heavy rain.
# The heights of the blocks are given as a series of non-negative integers.
 
# Example 1:
# Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
# Output: 6
# Explanation: Given this configuration of block heights, a total of 6 units of water can be trapped between the blocks.
 
# Example 2:
# Input: height = [4,2,0,3,2,5]
# Output: 9
# Explanation: In this scenario, the blocks can trap 9 units of rainwater in total.
 
# Constraints:
# - The number of blocks (n) is equal to the length of the height array.
# - 1 <= n <= 2 * 10^4
# - Each block's height is a non-negative integer not exceeding 10^5.

def calculate_rainwater(height):
    # declare a result variable assigned to zero 
    # loop over the height array 
    # declare a left variable assigned to the maximum of the left or the current height 
    # declare a right variable assigned to the maximum of the right or the current height 
    # add the minimum of the left and right minus the current height to the result 
    # return the result 
    
    result = 0
    left = 0
    right = 0
    for i in range(len(height)):
        left = max(left, height[i])
        right = max(right, height[i])
        result += min(left, right) - height[i]
    return result



def calculate_rainwater(height):
    # declare a result variable assigned to zero 
    # loop over the height array 
    # declare a left variable assigned to the maximum of the left or the current height 
    # declare a right variable assigned to the maximum of the right or the current height 
    # add the minimum of the left and right minus the current height to the result 
    # return the result 
    
    result = 0
    left = 0
    right = len(height) - 1
    left_max = 0
    right_max = 0
    while left < right:
        if height[left] < height[right]:
            if height[left] >= left_max:
                left_max = height[left]
            else:
                result += left_max - height[left]
            left += 1
        else:
            if height[right] >= right_max:
                right_max = height[right]
            else:
                result += right_max - height[right]
            right -= 1
    return result
