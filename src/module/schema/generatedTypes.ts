// Auto-generated TypeScript interfaces from JSON schema
/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface UserResponse {
  id: string;
  email: string;
  phoneNo: string;
  verificationToken?: string;
  wrongPasswordAttempt?: number;
  lockoutTime?: string;
  twoFactorAuthToken?: string;
  roleId?: string;
  post: {
    id: string;
    title: string;
    content: string;
    published: boolean;
    createdAt: string;
    updatedAt: string;
    authorId: string;
  }[];
}

/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface Post {
  id: string;
  title: string;
  content: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
  authorId: string;
  author?: {
    id: string;
    email: string;
    phoneNo: string;
    verificationToken?: string;
    wrongPasswordAttempt?: number;
    lockoutTime?: string;
    twoFactorAuthToken?: string;
    roleId?: string;
  };
}