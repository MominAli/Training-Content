using Logical_Question;

namespace Logical_Question
{

    /* Program 01 : C#: To display the n number Fibonacci sequence */


    public static class Fibonacci
    {
        // Method to calculate the Fibonacci series up to 'nno' numbers
        public static int Fibo(int nno)
        {
            int num1 = 0;
            int num2 = 1;

            // Loop to calculate Fibonacci series
            for (int i = 0; i < nno; i++)
            {
                int temp = num1;
                num1 = num2;
                num2 = temp + num2;
            }
            return num1; // Return the Fibonacci number
        }
    }

    /* Program 02 : C#:Write a program in C# Sharp to create a function to check whether a number is prime or not. */

    public static class PrimeNumber {
        
        // Method to check if a number is prime or not
        public static bool chkprime(int num)
        {
            // Loop to check for factors of the number
            for (int i = 2; i < num; i++)
            {
                if (num % i == 0)
                {
                    return false; // If any factor found, the number is not prime, return false
                }
            }
            return true; // If no factors found, the number is prime, return true
        }
    }

    /* Program 03 : C#: C#: Find the prime numbers within a range of numbers  */

    public static class PrimeNumberInRange {

     

    }

    /* Program 04 : C#: Swapping two numbers using a third variable in C#:  */


    /* Program 5 : Palindrome Number Program in C# */


    public static class Palindrome_Number
    {
        public static void plaindrom() {

            Console.Write("Enter a Number To Check Palindrome : ");
            int number = int.Parse(Console.ReadLine());
            int remineder, sum = 0;
            int temp = number;
            while (number > 0)
            {
                //Get the remainder by dividing the number with 10  
                remineder = number % 10;

                //multiply the sum with 10 and then add the remainder
                sum = (sum * 10) + remineder;

                //Get the quotient by dividing the number with 10 
                number = number / 10;
            }
            if (temp == sum)
            {
                Console.WriteLine($"Number {temp} is Palindrome.");
            }
            else
            {
                Console.WriteLine($"Number {temp} is not Palindrome");
            }
            Console.ReadKey();
        }
    }
    }

    /* Program 6 : Factorial Number Program in C# */

public static class Factorial_Number
{
    public static void Factorial()
    {
        int number = int.Parse(Console.ReadLine());

        int fact = 1;

        for (int i = 1; i < number; i++) { 
        
            fact= fact * i;
        }
        Console.WriteLine($"Factorial of {number} is : {fact }");
        Console.ReadLine();
    }
}
    
public static class SWAP { 
    
        public static int  Swapping(int num1 , int num2) {
            
            int number1 = 10, number2 = 20, temp = 0;
            Console.WriteLine($"Before SWapping number1= {num1}, number2 = {num2}");
            temp = num1; //temp=10
            number1 = num2; //number1=20      
            number2 = temp; //number2=10  

            Console.WriteLine($"After swapping number1= {number1}, number2 = {number2}");
            Console.ReadKey();
            return 0;

        }

        public static int Swapping_without_3_variable(int num1, int num2)
        {

            int number1 = 10, number2 = 20;
            Console.WriteLine($"Before SWapping number1= {num1}, number2 = {num2}");

            number1 = number1 + number2; //number1=30 (10+20)      
            number2 = number1 - number2; //number2=10 (30-20)      
            number1 = number1 - number2; //number1=20 (30-10) 



            Console.WriteLine($"After swapping number1= {number1}, number2 = {number2}");
            Console.ReadKey();
            return 0;

        }
    }


    internal class Program
    {
        static void Main(string[] args)
        {

            /* Program 01 : C#: To display the n number Fibonacci sequence */



            // Display a description of the program
            Console.Write("\n\nProgram 01 : C#: To display the n number Fibonacci sequence :\n");
            Console.Write("-----------------------------------------------------------------------------------------------------------------\n");


            // Prompt the user to input the number of Fibonacci Series
            Console.Write("Input number of Fibonacci Series : ");
            int n = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("The Fibonacci series of " + n + " numbers is :");
            // Loop to print the Fibonacci series up to 'n' numbers
            for (int i = 0; i < n; i++)
            {
                Console.Write(Fibonacci.Fibo(i) + "  "); // Call the 'Fibo' method to calculate and display each Fibonacci number
            }
            Console.WriteLine(); // Move to the next line after displaying the series


            
            /* Program 02 : C#:Write a program in C# Sharp to create a function to check whether a number is prime or not. */


            // Display a description of the program
            Console.Write("\n\nProgram 02 : C#:Write a program in C# Sharp to create a function to check whether a number is prime or not. :\n");
            Console.Write("-----------------------------------------------------------------------------------------------------------------\n");

            // Prompt the user to input a number
            Console.Write("Input a number : ");
            int number = Convert.ToInt32(Console.ReadLine());

            // Check if the number is prime using the 'chkprime' method
            if (PrimeNumber.chkprime(number))
            {
                Console.WriteLine(number + " is a prime number"); // Display if the number is prime
            }
            else
            {
                Console.WriteLine(number + " is not a prime number"); // Display if the number is not prime
            }

            /* Program 03 : C# - Find the prime numbers within a range of numbers  */

            /* Program 04 : C# - Swapping two numbers using a third variable in C#: */

            // Display a description of the program
            Console.Write("\n\nProgram 04 : Swapping two numbers using a third variable in C# :\n");
            Console.Write("-----------------------------------------------------------------------------------------------------------------\n");


        SWAP.Swapping(20,130);


            // Display a description of the program
            Console.Write("\n\nProgram 04.1 : Swapping two numbers without using a third variable in C# :\n");
            Console.Write("-----------------------------------------------------------------------------------------------------------------\n");

        SWAP.Swapping_without_3_variable(10,20);

        // Display a description of the program
        Console.Write("\n\nProgram 05 : check the number is plaindrom or not :\n");
        Console.Write("-----------------------------------------------------------------------------------------------------------------\n");
        Palindrome_Number.plaindrom();


        // Display a description of the program
        Console.Write("\n\nProgram 06 : Factorial Number in C#  :\n");
        Console.Write("-----------------------------------------------------------------------------------------------------------------\n");
        Console.Write("\n\n Enter an Number");

        Factorial_Number.Factorial();


    }

}
    

   
