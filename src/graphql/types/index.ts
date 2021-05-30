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

export type Query = {
  __typename?: 'Query';
  ping?: Maybe<Scalars['String']>;
  multiply?: Maybe<Scalars['Int']>;
};


export type QueryMultiplyArgs = {
  lower: Scalars['Int'];
  upper: Scalars['Int'];
};


export type PingQueryVariables = Exact<{ [key: string]: never; }>;


export type PingQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'ping'>
);

export type MultiplyQueryVariables = Exact<{
  lower: Scalars['Int'];
  upper: Scalars['Int'];
}>;


export type MultiplyQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'multiply'>
);


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
export const MultiplyDocument = gql`
    query Multiply($lower: Int!, $upper: Int!) {
  multiply(lower: $lower, upper: $upper)
}
    `;

/**
 * __useMultiplyQuery__
 *
 * To run a query within a React component, call `useMultiplyQuery` and pass it any options that fit your needs.
 * When your component renders, `useMultiplyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMultiplyQuery({
 *   variables: {
 *      lower: // value for 'lower'
 *      upper: // value for 'upper'
 *   },
 * });
 */
export function useMultiplyQuery(baseOptions: Apollo.QueryHookOptions<MultiplyQuery, MultiplyQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MultiplyQuery, MultiplyQueryVariables>(MultiplyDocument, options);
      }
export function useMultiplyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MultiplyQuery, MultiplyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MultiplyQuery, MultiplyQueryVariables>(MultiplyDocument, options);
        }
export type MultiplyQueryHookResult = ReturnType<typeof useMultiplyQuery>;
export type MultiplyLazyQueryHookResult = ReturnType<typeof useMultiplyLazyQuery>;
export type MultiplyQueryResult = Apollo.QueryResult<MultiplyQuery, MultiplyQueryVariables>;