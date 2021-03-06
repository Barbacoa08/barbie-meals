import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};


export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Mutation = {
  __typename?: 'Mutation';
  multiply?: Maybe<Scalars['Int']>;
};


export type MutationMultiplyArgs = {
  x: Scalars['Int'];
  y: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  ping?: Maybe<Scalars['String']>;
};


export type MultiplyMutationVariables = Exact<{
  x: Scalars['Int'];
  y: Scalars['Int'];
}>;


export type MultiplyMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'multiply'>
);

export type PingQueryVariables = Exact<{ [key: string]: never; }>;


export type PingQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'ping'>
);


export const MultiplyDocument = gql`
    mutation Multiply($x: Int!, $y: Int!) {
  multiply(x: $x, y: $y)
}
    `;
export type MultiplyMutationFn = Apollo.MutationFunction<MultiplyMutation, MultiplyMutationVariables>;

/**
 * __useMultiplyMutation__
 *
 * To run a mutation, you first call `useMultiplyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMultiplyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [multiplyMutation, { data, loading, error }] = useMultiplyMutation({
 *   variables: {
 *      x: // value for 'x'
 *      y: // value for 'y'
 *   },
 * });
 */
export function useMultiplyMutation(baseOptions?: Apollo.MutationHookOptions<MultiplyMutation, MultiplyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MultiplyMutation, MultiplyMutationVariables>(MultiplyDocument, options);
      }
export type MultiplyMutationHookResult = ReturnType<typeof useMultiplyMutation>;
export type MultiplyMutationResult = Apollo.MutationResult<MultiplyMutation>;
export type MultiplyMutationOptions = Apollo.BaseMutationOptions<MultiplyMutation, MultiplyMutationVariables>;
export const PingDocument = gql`
    query Ping {
  ping
}
    `;

/**
 * __usePingQuery__
 *
 * To run a query within a React component, call `usePingQuery` and pass it any options that fit your needs.
 * When your component renders, `usePingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePingQuery({
 *   variables: {
 *   },
 * });
 */
export function usePingQuery(baseOptions?: Apollo.QueryHookOptions<PingQuery, PingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PingQuery, PingQueryVariables>(PingDocument, options);
      }
export function usePingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PingQuery, PingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PingQuery, PingQueryVariables>(PingDocument, options);
        }
export type PingQueryHookResult = ReturnType<typeof usePingQuery>;
export type PingLazyQueryHookResult = ReturnType<typeof usePingLazyQuery>;
export type PingQueryResult = Apollo.QueryResult<PingQuery, PingQueryVariables>;