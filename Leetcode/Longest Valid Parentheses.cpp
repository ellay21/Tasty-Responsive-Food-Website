class Solution {
public:
    int longestValidParentheses(string s) {
        stack<int> st;
        // Initialize stack with -1 to handle base case
        st.push(-1);
        int maxLength = 0;

        // Traverse the string
        for (int i = 0; i < s.length(); i++) {
            if (s[i] == '(') {
                // Push index of '('
                st.push(i);
            } else {
                // Pop the stack for a matching pair
                st.pop();

                if (st.empty()) {
                    // Push the current index as a base for the next valid substring
                    st.push(i);
                } else {
                    // Calculate the length of the valid substring
                    maxLength = max(maxLength, i - st.top());
                }
            }
        }

        return maxLength;
    }
};
