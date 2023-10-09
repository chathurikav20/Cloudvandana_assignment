import java.util.Scanner;

public class PangramChecker {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String input = scanner.nextLine();

        boolean isPangram = checkIfPangram(input.toLowerCase());

        if (isPangram) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }

        scanner.close();
    }

    public static boolean checkIfPangram(String input) {
        boolean[] alphabetCheck = new boolean[26]; // Create an array to check if each letter is present

        for (char c : input.toCharArray()) {
            if (c >= 'a' && c <= 'z') {
                // Mark the corresponding alphabet as present
                alphabetCheck[c - 'a'] = true;
            }
        }

        // Check if all alphabet letters are present
        for (boolean isPresent : alphabetCheck) {
            if (!isPresent) {
                return false;
            }
        }

        return true;
    }
}
