import { api } from "./api";

api.injectEndpoints({
  endpoints: (builder) => ({
    createRecipe: builder.mutation({
      query: (recipe) => ({
        url: "/",
        method: "POST",
        body: recipe,
      }),
      invalidatesTags: ["Recipe"],
    }),
    invalidatesTags: () => [
      {
        type: "Recipe",
      },
    ],
  }),
});

export const { useCreateRecipeMutation } = api;
