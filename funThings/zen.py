import this

def collatz_function(a):
    if (a % 2 == 0): #if a is even
        return a//2
    else: # if an integer is not even, then it must be odd
        return (3*a)+1

# print(collatz_function(3))
# print(collatz_function(10))
# print(collatz_function(5))
# print(collatz_function(16))
# print(collatz_function(8))
# print(collatz_function(4))
# print(collatz_function(2))

def collatz_sequence(a):
    sequence = [a]
    while a!=1:
        a = collatz_function(a)
        sequence.append(a)
    return sequence

# print(collatz_sequence(3))
# print(collatz_sequence(5))
# print(collatz_sequence(23))
# print(collatz_sequence(34))

def smallest_int_with_collatz_length(n):
    i = 1
    while True:
        if (len(collatz_sequence(i)) >= n):
            return i
        i = i+1

print(smallest_int_with_collatz_length(510))
#counterexample = 626331, length of 510. terminates
