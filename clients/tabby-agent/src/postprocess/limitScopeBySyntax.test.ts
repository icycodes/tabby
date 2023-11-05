import { expect } from "chai";
import { documentContext, inline } from "./testUtils";
import { limitScopeBySyntax } from "./limitScopeBySyntax";

describe("postprocess", () => {
  describe("limitScopeBySyntax javascript", () => {
    it("should limit scope at function_declaration.", async () => {
      const context = {
        ...documentContext`
        function findMax(arr) {║}
        `,
        language: "javascript",
      };
      const completion = inline`
                               ├
          let max = arr[0];
          for (let i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
              max = arr[i];
            }
          }
          return max;
        }
        console.log(findMax([1, 2, 3, 4, 5]));┤
      `;
      const expected = inline`
                               ├
          let max = arr[0];
          for (let i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
              max = arr[i];
            }
          }
          return max;
        }┤
      `;
      expect(await limitScopeBySyntax(context)(completion)).to.eq(expected);
    });

    it("should limit scope at function_declaration", async () => {
      const context = {
        ...documentContext`
        function findMax(arr) {
          let max = arr[0];║
        }
        `,
        language: "javascript",
      };
      const completion = inline`
                           ├
          for (let i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
              max = arr[i];
            }
          }
          return max;
        }┤
      `;
      expect(await limitScopeBySyntax(context)(completion)).to.eq(completion);
    });

    it("should limit scope at function_declaration", async () => {
      const context = {
        ...documentContext`
        function findMax(arr) {
          let max = arr[0];
          for (let i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
              max = arr[i];
            }
          }║
        }
        `,
        language: "javascript",
      };
      const completion = inline`
           ├
          return max;
        }┤
      `;
      expect(await limitScopeBySyntax(context)(completion)).to.eq(completion);
    });

    it("should limit scope at for_statement.", async () => {
      const context = {
        ...documentContext`
        function findMax(arr) {
          let max = arr[0];
          for║
        }
        `,
        language: "javascript",
      };
      const completion = inline`
             ├ (let i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
              max = arr[i];
            }
          }
          return max;
        }
        console.log(findMax([1, 2, 3, 4, 5]));┤
      `;
      const expected = inline`
             ├ (let i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
              max = arr[i];
            }
          }┤
        ┴┴
      `;
      expect(await limitScopeBySyntax(context)(completion)).to.eq(expected);
    });

    it("should limit scope at current node if no parent scope found.", async () => {
      const context = {
        ...documentContext`
        let a =║
        `,
        language: "javascript",
      };
      const completion = inline`
               ├ 1;
        let b = 2;┤
      `;
      const expected = inline`
               ├ 1;┤
      `;
      expect(await limitScopeBySyntax(context)(completion)).to.eq(expected);
    });
  });

  describe("limitScopeBySyntax python", () => {
    it("should limit scope at function_definition.", async () => {
      const context = {
        ...documentContext`
        def find_min(arr):║
        `,
        language: "python",
      };
      const completion = inline`
                          ├
          min = arr[0]
          for i in range(1, len(arr)):
            if arr[i] < min:
              min = arr[i]
          return min
        print(find_min([1, 2, 3, 4, 5]))┤
      `;
      const expected = inline`
                          ├
          min = arr[0]
          for i in range(1, len(arr)):
            if arr[i] < min:
              min = arr[i]
          return min┤
        ┴┴
      `;
      expect(await limitScopeBySyntax(context)(completion)).to.eq(expected);
    });

    it("should limit scope at function_definition.", async () => {
      const context = {
        ...documentContext`
        def find_min(arr):
          min = arr[0]║
        `,
        language: "python",
      };
      const completion = inline`
                      ├
          for i in range(1, len(arr)):
            if arr[i] < min:
              min = arr[i]
          return min
        print(find_min([1, 2, 3, 4, 5]))┤
      `;
      const expected = inline`
                      ├
          for i in range(1, len(arr)):
            if arr[i] < min:
              min = arr[i]
          return min┤
        ┴┴
      `;
      expect(await limitScopeBySyntax(context)(completion)).to.eq(expected);
    });

    it("should limit scope at function_definition.", async () => {
      const context = {
        ...documentContext`
        def find_min(arr):
          min = arr[0]
          for i in range(1, len(arr)):
            if arr[i] < min:
              min = arr[i]║
        `,
        language: "python",
      };
      const completion = inline`
                          ├
          return min┤
      `;
      expect(await limitScopeBySyntax(context)(completion)).to.eq(completion);
    });

    it("should limit scope at for_statement.", async () => {
      const context = {
        ...documentContext`
        def find_min(arr):
          max = arr[0]
          for║
        `,
        language: "python",
      };
      const completion = inline`
             ├ i in range(1, len(arr)):
            if arr[i] < min:
              min = arr[i]
          return min
        ┤
      `;
      const expected = inline`
             ├ i in range(1, len(arr)):
            if arr[i] < min:
              min = arr[i]┤
        ┴┴┴┴
      `;
      expect(await limitScopeBySyntax(context)(completion)).to.eq(expected);
    });
  });
});
