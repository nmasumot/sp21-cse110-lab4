## Part 1a
1. Line 9 prints:
   
   values added: 20

2. Line 13 prints:
   
   final result: 20

3. Line 9 prints:

    values added: 20

4. Line 13 returns an error because when we use the let keyword, result is only defined in the if statement. Since line 13 is outside of the if statement and is trying to call for result, we get an error since it does not exist. 

5. The code returns an error at line 5. Since we made result a constant, we cannot change it by adding num1 and num2. Since we try and change what result is, we get an error. We never reach line 9.

6. The code returns an error at line 5. We cannot change the constant so we never reach line 13, since we hit an error at line 5. 

## Part 1b
1. On line 12, the program will output 3 to the console. Since the prices input has a length of 3, the for loop will run while i is less than 3. Once i gets to 3, the code will exit the loop and the console outputs 3.

2. On line 13, the program will output 150 to the console because in the last iteration of the for loop, 300 is going to be the prices[i]. The for loop sets discountedPrice to 300*(1-.5) which would be 150. discountedPrice keeps that value until the end of the program so when line 13 is reached, it outputs 150.

3. On line 14, the program will also output 150 to the console. Since in the last iteration of the loop discountedPrice is 150, when calculating the finalPrice, we are multiplying discountedPrice by 100, and then dividing that by 100, which would still give us 150. finalPrice keeps that value when we exit the loop, so when the program reaches line 14, it outputs 150 to the console. 

4. This function will return the array [50,100,150]. For each iteration of the for loop, it is calculating the discounted price for each of the given prices. Since we are given the list [100,200,300] with a discounted price of .5, we are going to get an array that has half of each of the original prices.

5. This function will cause an error to occur. Since we used the let keyword for i, i can only be accessed in the for loop. Since line 12 is not in the for loop and is trying to access i, we get an error.

6. This function will also cause an error to occur. Since we used the let keyword for discountedPrice in the for loop, we can only access it from the for loop. Since line 13 is not in the for loop, when we get to line 13, an error occurs since we cannot access discountedPrice. 

7. On line 14, the program will output 150 to the console. Eventhough we used the let keyword with finalPrice, it is used inside the function and not any other block. Since line 14 is still inside the function, it is inside the same block as the let keyword, so it can still be accessed. 

8. This function will also return the array [50,100,150]. The program still has the discounted array accessible at the return statement, and since the for loop is inside the function block, discounted can still be changed from inside the for loop. The for loop works the same as before since the two variables inside the for loop block are only used inside the for loop, the overall function does not change how it works. We will still get the output [50,100,150].

9. On line 11, we will get an error occurring. Just like for question 5, since we used let for the variable i in the for loop, i can only be accessed in the for loop. Since line 11 is outside of the for loop, i cannot be accessed and we get an error. 

10. On line 12, the program will output 3 to the console. Since we are setting length to equal the length of the prices input, and out prices input is 3 long, the console will output 3.

11. This function will return the array [50,100,150]. Eventhough we are making the array a const variable, we can still modify it. We are not reassigning its value, but just adding new entries into the const array. That allows us to have a const array, but it still doesn't run into an error since we are not reassigning its value.

12. A. student.name

    B. student['Grad Year']

    C. student.greeting();

    D. student['Favorite Teacher'].name

    E. student.courseLoad[0]

13. A. '32'     Since we are adding, the integer 2 is converted to a string and we get '32'
    
    B. 1    Since we are subtracting from a string, we convert the string to an integer and do the computation.

    C. 3    null converts to a 0, so we do 3 + 0 and get 3

    D. '3null'     Since '3' is a string, we convert null to a string and put them together to get '3null'

    E. 4        true converts to a 1, so we do 1 + 3 and we get 4

    F. 0        When adding booleans, we convert them to integers. Since false is equal to 0 and null is equal to 0, when we add 0+0 we get 0.

    G. '3undefined'     Since 3 is a string, we convert undefined to a string and when we put the two together we get '3undefined'

    H. NaN      Since we are subtracting, we convert the string to an integer, and when we try and subtract an undefined number, we subtract Nan, so we get NaN.

14. A. True     The string '2' becomes an integer and 2 > 1 so we get true.

    B. False    Since we are comparing two strings, we look at the first character in each, and since the 2 is larger than the 1, we get false since 2 should not be less than 1.

    C. True     The String '2' becomes an integer and 2 is equal to 2 so we get true.

    D. False    Since we are using 3 equal signs, we do not convert types, so 2 is not the same as '2' so we get false.

    E. False    Since true is converted to an integer an integer, which is 1, and 2 does not equal to 1, so we get false.

    F. True     Since Boolean(2) is true, they have the same type and value of true, so we get true.

15. The == operator can compare across different types of data and still get that they are equal, like how 2 == '2' can still be seen as true. The === operator also checks to make sure that both are of the same data type, so it cannot have a true outcome across data types, like how 2 === '2' is false since they are of different data types.

16. JS code

17. The result would be for the array [2,4,6] to be returned. For each of the values in the array, we are pushing a new number to our new Array. We get this new number by calling back to a function, in this case doSomething, with the parameter of the values in the array. So we first take 1, and pass that through doSomething, and we get 2. We then push 2 to the new Array, and then go to the next number, which is 2, and pass that through doSomething. We get the value 4, which we then push to the new Array, and then repeat with the number 3. doSomething gives 6 for the number 3, so we add 6 to the array, and we return the new array which consists of [2,4,6].

18. JS Code
 
19. The output of the code is 
    
    1

    4

    3

    2

    The first console.log is printed, then the next two lines are set as a timeout, so they are delayed, so the 4th console.log is printed. Then the thrid one is printed since it has a lower timeout than the second one. The second console.log is the final output of the program.

