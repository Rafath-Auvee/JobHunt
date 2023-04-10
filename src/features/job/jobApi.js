import apiSlice from "../api/apiSlice";

const jobApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postJob: builder.mutation({
      query: (data) => ({
        url: "/job",
        method: "POST",
        body: data,
      }),
      invalidateTags: ["Jobs"],
    }),
    apply: builder.mutation({
      query: (data) => ({
        url: "/apply",
        method: "PATCH",
        body: data,
      }),
      invalidateTags: ["Jobs"],
    }),
    question: builder.mutation({
      query: (data) => ({
        url: "/query",
        method: "PATCH",
        body: data,
      }),
      invalidateTags: ["Job"],
    }),
    reply: builder.mutation({
      query: (data) => ({
        url: "/reply",
        method: "PATCH",
        body: data,
      }),
      invalidateTags: ["Job"],
    }),
    getAppliedJobs: builder.query({
      query: (email) => ({
        url: `/applied-jobs/${email}`,
      }),
    }),
    getJobs: builder.query({
      query: (data) => ({
        url: "/jobs",
        method: "GET",
      }),
      provideTags: ["Jobs"],
    }),
    jobById: builder.query({
      query: (id) => ({
        url: `/job/${id}`,

      }),
      providesTags: ["Job"],
    }),
  }),
});

export const {
  usePostJobMutation,
  useGetJobsQuery,
  useJobByIdQuery,
  useApplyMutation,
  useGetAppliedJobsQuery,
  useQuestionMutation,
  useReplyMutation,
} = jobApi;
