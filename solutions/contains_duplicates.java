import java.util.HashSet;

public class contains_duplicates {

    public boolean containsDuplicate(int[] nums) {
        HashSet<Integer> seenNumbers = new HashSet<>();

        for (int num : nums) {

            if (seenNumbers.contains(num)) {
                return true;
            }

            seenNumbers.add(num);
        }

        return false;
    }

    public static void main(String[] args) {

        int[] nums = {1, 2, 3, 1};

        contains_duplicates solver = new contains_duplicates();

        System.out.println(solver.containsDuplicate(nums));
    }
}