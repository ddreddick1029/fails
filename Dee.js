package Dee1;
import java.util.Scanner;
public class Game  {

        Scanner yourName;
        Scanner youChose;
        Scanner twoChose;
        String charName;
        int choice;
        int choice1;
        int playerHP = 10;
        public static void main(String[] args) { //

                Game game; // name of class method + in

                game = new Game(); // allowing main method to access the respected
"public voids"
                game.charCreation();
                game.intro();
        }
                public void charCreation() { //

                        youChose = new Scanner(System.in);

                        System.out.println("Please enter your name: ");
                        charName = youChose.nextLine();

                        System.out.println("Hello " + charName + ", let's start your adventure!");
                        System.out.println("You will begin with an HP of: " + playerHP);
                        System.out.println("-------------------------------------------------------");
                }
                public void intro() {

                        System.out.println("");
                        System.out.println("After a long night of studying, "
                                        + "you wake up to birds chirping.");
                        System.out.println("");
                        System.out.println("How do you feel?");
                        System.out.println("");
                        System.out.println("1: I feel well rested!");
                        System.out.println("2: I feel really sluggish.");
                        System.out.println("3: Sleep is for the weak!");
                        System.out.println("4: Wake up? I've been up for two days straight!");
                        System.out.println("");

                        choice = youChose.nextInt();

                        if(choice==1) {
                                playerHP = playerHP + 5;
                                System.out.println("That's great! ");
                                System.out.println("Your HP is now: " + playerHP);
                                theTrip(); // jump to this method
                        }
                        if (choice==2) {
                                playerHP = playerHP - 5;
                                System.out.println("That's not so good!");
                                System.out.println("Your HP spikes to: " + playerHP);
                                theTrip(); // jump to this method
                        }
                        if (choice==3) {
                                playerHP = playerHP - 8;
                                System.out.println("Okay, you got me! The only sleep you actually had was "
                                                + "when you did so in two 30-minute intervals!");
                                theTrip(); // jump to this method
                        }
                        if (choice==4) {
                                playerHP = playerHP - playerHP;
                                System.out.println("This definitely isn't healthy. Player health
plummets to " + playerHP + "!");
                                System.out.println("Turns out that is not really effective. "
                                                + "You pass out in your room for the day." + "\nGAME OVER");
                                intro(); // calling this method
                        }
                }
                public void theTrip() {
                        System.out.println("-------------------------------------------------------");
                        System.out.println("You now find yourself in the academic circle.");
                        System.out.println("Would you like to get coffee from Starbucks?");
                        System.out.println("1. Yes!");
                        System.out.println("2. Nope.");

                        twoChose = new Scanner(System.in);
                        choice1 = twoChose.nextInt();
                        if (choice1==1) {
                                System.out.println("-------------------------------------------------------");
                                System.out.println("The line turns out to be freakishly long and
you miss your test");
                                System.out.println("But at least you got coffee?");
                                System.out.println("GAME OVER");
                                theTrip();
                }
                        if (choice1==2) {
                                System.out.println("Coffee sucks.");
                                theTest();

        }
                }
                public void theTest() {
                        System.out.println("You arrive in class for your test.");
                        System.out.println("Your professor hands you your test");

                        if (playerHP==15) {
                                System.out.println("You passed your exam with an A!");
                        }
                        else if (playerHP==5) {
                                System.out.println("You got a C on your exam.");
                                System.out.println("C's get degrees?");
                        }
                        switch (playerHP) {

                        case 0:
                                playerHP =15;
                                System.out.println("You passed your exam with an A!");
                        case 1:
                                playerHP =5;
                                System.out.println("You got a C on your exam");
                                System.out.println("C's get degrees?");
                        case 2:
                                playerHP = 2;
                                System.out.println("You made a snake on your scantron.");
                                System.out.println("You scored a " + Math.floor(Math.random()* 101));
                                break;
                        }
                        }
}