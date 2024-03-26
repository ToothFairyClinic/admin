import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  numeric: { input: any; output: any; }
  uuid: { input: any; output: any; }
};

export type AdminGetMeOutput = {
  __typename?: 'AdminGetMeOutput';
  id: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export type AdminRegisterInput = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type AdminRegisterOutput = {
  __typename?: 'AdminRegisterOutput';
  accessToken: Scalars['String']['output'];
};

export type CloudinarySignatureOutput = {
  __typename?: 'CloudinarySignatureOutput';
  apiKey: Scalars['String']['output'];
  cloudName: Scalars['String']['output'];
  publicId: Scalars['String']['output'];
  signature: Scalars['String']['output'];
  timestamp: Scalars['Int']['output'];
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "admin" */
export type Admin = {
  __typename?: 'admin';
  id: Scalars['uuid']['output'];
  password: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export type AdminLoginInput = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type AdminLoginOutput = {
  __typename?: 'adminLoginOutput';
  accessToken: Scalars['String']['output'];
};

/** aggregated selection of "admin" */
export type Admin_Aggregate = {
  __typename?: 'admin_aggregate';
  aggregate?: Maybe<Admin_Aggregate_Fields>;
  nodes: Array<Admin>;
};

/** aggregate fields of "admin" */
export type Admin_Aggregate_Fields = {
  __typename?: 'admin_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Admin_Max_Fields>;
  min?: Maybe<Admin_Min_Fields>;
};


/** aggregate fields of "admin" */
export type Admin_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Admin_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "admin". All fields are combined with a logical 'AND'. */
export type Admin_Bool_Exp = {
  _and?: InputMaybe<Array<Admin_Bool_Exp>>;
  _not?: InputMaybe<Admin_Bool_Exp>;
  _or?: InputMaybe<Array<Admin_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "admin" */
export enum Admin_Constraint {
  /** unique or primary key constraint on columns "id" */
  AdminPkey = 'admin_pkey',
  /** unique or primary key constraint on columns "username" */
  AdminUsernameKey = 'admin_username_key'
}

/** input type for inserting data into table "admin" */
export type Admin_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Admin_Max_Fields = {
  __typename?: 'admin_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Admin_Min_Fields = {
  __typename?: 'admin_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "admin" */
export type Admin_Mutation_Response = {
  __typename?: 'admin_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Admin>;
};

/** on_conflict condition type for table "admin" */
export type Admin_On_Conflict = {
  constraint: Admin_Constraint;
  update_columns?: Array<Admin_Update_Column>;
  where?: InputMaybe<Admin_Bool_Exp>;
};

/** Ordering options when selecting data from "admin". */
export type Admin_Order_By = {
  id?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
};

/** primary key columns input for table: admin */
export type Admin_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "admin" */
export enum Admin_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Password = 'password',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "admin" */
export type Admin_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "admin" */
export type Admin_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Admin_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Admin_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "admin" */
export enum Admin_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Password = 'password',
  /** column name */
  Username = 'username'
}

export type Admin_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Admin_Set_Input>;
  /** filter the rows which have to be updated */
  where: Admin_Bool_Exp;
};

/** columns and relationships of "advantages" */
export type Advantages = {
  __typename?: 'advantages';
  id: Scalars['uuid']['output'];
  title: Scalars['String']['output'];
};

/** aggregated selection of "advantages" */
export type Advantages_Aggregate = {
  __typename?: 'advantages_aggregate';
  aggregate?: Maybe<Advantages_Aggregate_Fields>;
  nodes: Array<Advantages>;
};

/** aggregate fields of "advantages" */
export type Advantages_Aggregate_Fields = {
  __typename?: 'advantages_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Advantages_Max_Fields>;
  min?: Maybe<Advantages_Min_Fields>;
};


/** aggregate fields of "advantages" */
export type Advantages_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Advantages_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "advantages". All fields are combined with a logical 'AND'. */
export type Advantages_Bool_Exp = {
  _and?: InputMaybe<Array<Advantages_Bool_Exp>>;
  _not?: InputMaybe<Advantages_Bool_Exp>;
  _or?: InputMaybe<Array<Advantages_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "advantages" */
export enum Advantages_Constraint {
  /** unique or primary key constraint on columns "id" */
  AdvantagesPkey = 'advantages_pkey'
}

/** input type for inserting data into table "advantages" */
export type Advantages_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Advantages_Max_Fields = {
  __typename?: 'advantages_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Advantages_Min_Fields = {
  __typename?: 'advantages_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "advantages" */
export type Advantages_Mutation_Response = {
  __typename?: 'advantages_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Advantages>;
};

/** on_conflict condition type for table "advantages" */
export type Advantages_On_Conflict = {
  constraint: Advantages_Constraint;
  update_columns?: Array<Advantages_Update_Column>;
  where?: InputMaybe<Advantages_Bool_Exp>;
};

/** Ordering options when selecting data from "advantages". */
export type Advantages_Order_By = {
  id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** primary key columns input for table: advantages */
export type Advantages_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "advantages" */
export enum Advantages_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "advantages" */
export type Advantages_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "advantages" */
export type Advantages_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Advantages_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Advantages_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "advantages" */
export enum Advantages_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title'
}

export type Advantages_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Advantages_Set_Input>;
  /** filter the rows which have to be updated */
  where: Advantages_Bool_Exp;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  adminRegister?: Maybe<AdminRegisterOutput>;
  /** delete data from the table: "admin" */
  delete_admin?: Maybe<Admin_Mutation_Response>;
  /** delete single row from the table: "admin" */
  delete_admin_by_pk?: Maybe<Admin>;
  /** delete data from the table: "advantages" */
  delete_advantages?: Maybe<Advantages_Mutation_Response>;
  /** delete single row from the table: "advantages" */
  delete_advantages_by_pk?: Maybe<Advantages>;
  /** delete data from the table: "personnel" */
  delete_personnel?: Maybe<Personnel_Mutation_Response>;
  /** delete single row from the table: "personnel" */
  delete_personnel_by_pk?: Maybe<Personnel>;
  /** delete data from the table: "personnel_categories" */
  delete_personnel_categories?: Maybe<Personnel_Categories_Mutation_Response>;
  /** delete single row from the table: "personnel_categories" */
  delete_personnel_categories_by_pk?: Maybe<Personnel_Categories>;
  /** delete data from the table: "products" */
  delete_products?: Maybe<Products_Mutation_Response>;
  /** delete single row from the table: "products" */
  delete_products_by_pk?: Maybe<Products>;
  /** delete data from the table: "products_categories" */
  delete_products_categories?: Maybe<Products_Categories_Mutation_Response>;
  /** delete single row from the table: "products_categories" */
  delete_products_categories_by_pk?: Maybe<Products_Categories>;
  /** delete data from the table: "services" */
  delete_services?: Maybe<Services_Mutation_Response>;
  /** delete single row from the table: "services" */
  delete_services_by_pk?: Maybe<Services>;
  /** insert data into the table: "admin" */
  insert_admin?: Maybe<Admin_Mutation_Response>;
  /** insert a single row into the table: "admin" */
  insert_admin_one?: Maybe<Admin>;
  /** insert data into the table: "advantages" */
  insert_advantages?: Maybe<Advantages_Mutation_Response>;
  /** insert a single row into the table: "advantages" */
  insert_advantages_one?: Maybe<Advantages>;
  /** insert data into the table: "personnel" */
  insert_personnel?: Maybe<Personnel_Mutation_Response>;
  /** insert data into the table: "personnel_categories" */
  insert_personnel_categories?: Maybe<Personnel_Categories_Mutation_Response>;
  /** insert a single row into the table: "personnel_categories" */
  insert_personnel_categories_one?: Maybe<Personnel_Categories>;
  /** insert a single row into the table: "personnel" */
  insert_personnel_one?: Maybe<Personnel>;
  /** insert data into the table: "products" */
  insert_products?: Maybe<Products_Mutation_Response>;
  /** insert data into the table: "products_categories" */
  insert_products_categories?: Maybe<Products_Categories_Mutation_Response>;
  /** insert a single row into the table: "products_categories" */
  insert_products_categories_one?: Maybe<Products_Categories>;
  /** insert a single row into the table: "products" */
  insert_products_one?: Maybe<Products>;
  /** insert data into the table: "services" */
  insert_services?: Maybe<Services_Mutation_Response>;
  /** insert a single row into the table: "services" */
  insert_services_one?: Maybe<Services>;
  /** update data of the table: "admin" */
  update_admin?: Maybe<Admin_Mutation_Response>;
  /** update single row of the table: "admin" */
  update_admin_by_pk?: Maybe<Admin>;
  /** update multiples rows of table: "admin" */
  update_admin_many?: Maybe<Array<Maybe<Admin_Mutation_Response>>>;
  /** update data of the table: "advantages" */
  update_advantages?: Maybe<Advantages_Mutation_Response>;
  /** update single row of the table: "advantages" */
  update_advantages_by_pk?: Maybe<Advantages>;
  /** update multiples rows of table: "advantages" */
  update_advantages_many?: Maybe<Array<Maybe<Advantages_Mutation_Response>>>;
  /** update data of the table: "personnel" */
  update_personnel?: Maybe<Personnel_Mutation_Response>;
  /** update single row of the table: "personnel" */
  update_personnel_by_pk?: Maybe<Personnel>;
  /** update data of the table: "personnel_categories" */
  update_personnel_categories?: Maybe<Personnel_Categories_Mutation_Response>;
  /** update single row of the table: "personnel_categories" */
  update_personnel_categories_by_pk?: Maybe<Personnel_Categories>;
  /** update multiples rows of table: "personnel_categories" */
  update_personnel_categories_many?: Maybe<Array<Maybe<Personnel_Categories_Mutation_Response>>>;
  /** update multiples rows of table: "personnel" */
  update_personnel_many?: Maybe<Array<Maybe<Personnel_Mutation_Response>>>;
  /** update data of the table: "products" */
  update_products?: Maybe<Products_Mutation_Response>;
  /** update single row of the table: "products" */
  update_products_by_pk?: Maybe<Products>;
  /** update data of the table: "products_categories" */
  update_products_categories?: Maybe<Products_Categories_Mutation_Response>;
  /** update single row of the table: "products_categories" */
  update_products_categories_by_pk?: Maybe<Products_Categories>;
  /** update multiples rows of table: "products_categories" */
  update_products_categories_many?: Maybe<Array<Maybe<Products_Categories_Mutation_Response>>>;
  /** update multiples rows of table: "products" */
  update_products_many?: Maybe<Array<Maybe<Products_Mutation_Response>>>;
  /** update data of the table: "services" */
  update_services?: Maybe<Services_Mutation_Response>;
  /** update single row of the table: "services" */
  update_services_by_pk?: Maybe<Services>;
  /** update multiples rows of table: "services" */
  update_services_many?: Maybe<Array<Maybe<Services_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootAdminRegisterArgs = {
  admin: AdminRegisterInput;
};


/** mutation root */
export type Mutation_RootDelete_AdminArgs = {
  where: Admin_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Admin_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_AdvantagesArgs = {
  where: Advantages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Advantages_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_PersonnelArgs = {
  where: Personnel_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Personnel_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Personnel_CategoriesArgs = {
  where: Personnel_Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Personnel_Categories_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ProductsArgs = {
  where: Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Products_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Products_CategoriesArgs = {
  where: Products_Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Products_Categories_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ServicesArgs = {
  where: Services_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Services_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootInsert_AdminArgs = {
  objects: Array<Admin_Insert_Input>;
  on_conflict?: InputMaybe<Admin_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Admin_OneArgs = {
  object: Admin_Insert_Input;
  on_conflict?: InputMaybe<Admin_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_AdvantagesArgs = {
  objects: Array<Advantages_Insert_Input>;
  on_conflict?: InputMaybe<Advantages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Advantages_OneArgs = {
  object: Advantages_Insert_Input;
  on_conflict?: InputMaybe<Advantages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PersonnelArgs = {
  objects: Array<Personnel_Insert_Input>;
  on_conflict?: InputMaybe<Personnel_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Personnel_CategoriesArgs = {
  objects: Array<Personnel_Categories_Insert_Input>;
  on_conflict?: InputMaybe<Personnel_Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Personnel_Categories_OneArgs = {
  object: Personnel_Categories_Insert_Input;
  on_conflict?: InputMaybe<Personnel_Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Personnel_OneArgs = {
  object: Personnel_Insert_Input;
  on_conflict?: InputMaybe<Personnel_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ProductsArgs = {
  objects: Array<Products_Insert_Input>;
  on_conflict?: InputMaybe<Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Products_CategoriesArgs = {
  objects: Array<Products_Categories_Insert_Input>;
  on_conflict?: InputMaybe<Products_Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Products_Categories_OneArgs = {
  object: Products_Categories_Insert_Input;
  on_conflict?: InputMaybe<Products_Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Products_OneArgs = {
  object: Products_Insert_Input;
  on_conflict?: InputMaybe<Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ServicesArgs = {
  objects: Array<Services_Insert_Input>;
  on_conflict?: InputMaybe<Services_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Services_OneArgs = {
  object: Services_Insert_Input;
  on_conflict?: InputMaybe<Services_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_AdminArgs = {
  _set?: InputMaybe<Admin_Set_Input>;
  where: Admin_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Admin_By_PkArgs = {
  _set?: InputMaybe<Admin_Set_Input>;
  pk_columns: Admin_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Admin_ManyArgs = {
  updates: Array<Admin_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AdvantagesArgs = {
  _set?: InputMaybe<Advantages_Set_Input>;
  where: Advantages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Advantages_By_PkArgs = {
  _set?: InputMaybe<Advantages_Set_Input>;
  pk_columns: Advantages_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Advantages_ManyArgs = {
  updates: Array<Advantages_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_PersonnelArgs = {
  _set?: InputMaybe<Personnel_Set_Input>;
  where: Personnel_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Personnel_By_PkArgs = {
  _set?: InputMaybe<Personnel_Set_Input>;
  pk_columns: Personnel_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Personnel_CategoriesArgs = {
  _set?: InputMaybe<Personnel_Categories_Set_Input>;
  where: Personnel_Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Personnel_Categories_By_PkArgs = {
  _set?: InputMaybe<Personnel_Categories_Set_Input>;
  pk_columns: Personnel_Categories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Personnel_Categories_ManyArgs = {
  updates: Array<Personnel_Categories_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Personnel_ManyArgs = {
  updates: Array<Personnel_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ProductsArgs = {
  _inc?: InputMaybe<Products_Inc_Input>;
  _set?: InputMaybe<Products_Set_Input>;
  where: Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Products_By_PkArgs = {
  _inc?: InputMaybe<Products_Inc_Input>;
  _set?: InputMaybe<Products_Set_Input>;
  pk_columns: Products_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Products_CategoriesArgs = {
  _set?: InputMaybe<Products_Categories_Set_Input>;
  where: Products_Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Products_Categories_By_PkArgs = {
  _set?: InputMaybe<Products_Categories_Set_Input>;
  pk_columns: Products_Categories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Products_Categories_ManyArgs = {
  updates: Array<Products_Categories_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Products_ManyArgs = {
  updates: Array<Products_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ServicesArgs = {
  _set?: InputMaybe<Services_Set_Input>;
  where: Services_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Services_By_PkArgs = {
  _set?: InputMaybe<Services_Set_Input>;
  pk_columns: Services_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Services_ManyArgs = {
  updates: Array<Services_Updates>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']['input']>;
  _gt?: InputMaybe<Scalars['numeric']['input']>;
  _gte?: InputMaybe<Scalars['numeric']['input']>;
  _in?: InputMaybe<Array<Scalars['numeric']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['numeric']['input']>;
  _lte?: InputMaybe<Scalars['numeric']['input']>;
  _neq?: InputMaybe<Scalars['numeric']['input']>;
  _nin?: InputMaybe<Array<Scalars['numeric']['input']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "personnel" */
export type Personnel = {
  __typename?: 'personnel';
  description: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  /** An object relationship */
  personnel_category?: Maybe<Personnel_Categories>;
  personnel_category_id: Scalars['uuid']['output'];
};

/** aggregated selection of "personnel" */
export type Personnel_Aggregate = {
  __typename?: 'personnel_aggregate';
  aggregate?: Maybe<Personnel_Aggregate_Fields>;
  nodes: Array<Personnel>;
};

export type Personnel_Aggregate_Bool_Exp = {
  count?: InputMaybe<Personnel_Aggregate_Bool_Exp_Count>;
};

export type Personnel_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Personnel_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Personnel_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "personnel" */
export type Personnel_Aggregate_Fields = {
  __typename?: 'personnel_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Personnel_Max_Fields>;
  min?: Maybe<Personnel_Min_Fields>;
};


/** aggregate fields of "personnel" */
export type Personnel_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Personnel_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "personnel" */
export type Personnel_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Personnel_Max_Order_By>;
  min?: InputMaybe<Personnel_Min_Order_By>;
};

/** input type for inserting array relation for remote table "personnel" */
export type Personnel_Arr_Rel_Insert_Input = {
  data: Array<Personnel_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Personnel_On_Conflict>;
};

/** Boolean expression to filter rows from the table "personnel". All fields are combined with a logical 'AND'. */
export type Personnel_Bool_Exp = {
  _and?: InputMaybe<Array<Personnel_Bool_Exp>>;
  _not?: InputMaybe<Personnel_Bool_Exp>;
  _or?: InputMaybe<Array<Personnel_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  personnel_category?: InputMaybe<Personnel_Categories_Bool_Exp>;
  personnel_category_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** columns and relationships of "personnel_categories" */
export type Personnel_Categories = {
  __typename?: 'personnel_categories';
  id: Scalars['uuid']['output'];
  /** An array relationship */
  personnel_items: Array<Personnel>;
  /** An aggregate relationship */
  personnel_items_aggregate: Personnel_Aggregate;
  slug?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};


/** columns and relationships of "personnel_categories" */
export type Personnel_CategoriesPersonnel_ItemsArgs = {
  distinct_on?: InputMaybe<Array<Personnel_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Personnel_Order_By>>;
  where?: InputMaybe<Personnel_Bool_Exp>;
};


/** columns and relationships of "personnel_categories" */
export type Personnel_CategoriesPersonnel_Items_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Personnel_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Personnel_Order_By>>;
  where?: InputMaybe<Personnel_Bool_Exp>;
};

/** aggregated selection of "personnel_categories" */
export type Personnel_Categories_Aggregate = {
  __typename?: 'personnel_categories_aggregate';
  aggregate?: Maybe<Personnel_Categories_Aggregate_Fields>;
  nodes: Array<Personnel_Categories>;
};

/** aggregate fields of "personnel_categories" */
export type Personnel_Categories_Aggregate_Fields = {
  __typename?: 'personnel_categories_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Personnel_Categories_Max_Fields>;
  min?: Maybe<Personnel_Categories_Min_Fields>;
};


/** aggregate fields of "personnel_categories" */
export type Personnel_Categories_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Personnel_Categories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "personnel_categories". All fields are combined with a logical 'AND'. */
export type Personnel_Categories_Bool_Exp = {
  _and?: InputMaybe<Array<Personnel_Categories_Bool_Exp>>;
  _not?: InputMaybe<Personnel_Categories_Bool_Exp>;
  _or?: InputMaybe<Array<Personnel_Categories_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  personnel_items?: InputMaybe<Personnel_Bool_Exp>;
  personnel_items_aggregate?: InputMaybe<Personnel_Aggregate_Bool_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "personnel_categories" */
export enum Personnel_Categories_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProductsCategoriesPkey = 'products_categories_pkey'
}

/** input type for inserting data into table "personnel_categories" */
export type Personnel_Categories_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  personnel_items?: InputMaybe<Personnel_Arr_Rel_Insert_Input>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Personnel_Categories_Max_Fields = {
  __typename?: 'personnel_categories_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Personnel_Categories_Min_Fields = {
  __typename?: 'personnel_categories_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "personnel_categories" */
export type Personnel_Categories_Mutation_Response = {
  __typename?: 'personnel_categories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Personnel_Categories>;
};

/** input type for inserting object relation for remote table "personnel_categories" */
export type Personnel_Categories_Obj_Rel_Insert_Input = {
  data: Personnel_Categories_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Personnel_Categories_On_Conflict>;
};

/** on_conflict condition type for table "personnel_categories" */
export type Personnel_Categories_On_Conflict = {
  constraint: Personnel_Categories_Constraint;
  update_columns?: Array<Personnel_Categories_Update_Column>;
  where?: InputMaybe<Personnel_Categories_Bool_Exp>;
};

/** Ordering options when selecting data from "personnel_categories". */
export type Personnel_Categories_Order_By = {
  id?: InputMaybe<Order_By>;
  personnel_items_aggregate?: InputMaybe<Personnel_Aggregate_Order_By>;
  slug?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** primary key columns input for table: personnel_categories */
export type Personnel_Categories_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "personnel_categories" */
export enum Personnel_Categories_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Slug = 'slug',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "personnel_categories" */
export type Personnel_Categories_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "personnel_categories" */
export type Personnel_Categories_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Personnel_Categories_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Personnel_Categories_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "personnel_categories" */
export enum Personnel_Categories_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Slug = 'slug',
  /** column name */
  Title = 'title'
}

export type Personnel_Categories_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Personnel_Categories_Set_Input>;
  /** filter the rows which have to be updated */
  where: Personnel_Categories_Bool_Exp;
};

/** unique or primary key constraints on table "personnel" */
export enum Personnel_Constraint {
  /** unique or primary key constraint on columns "id" */
  PersonnelPkey = 'personnel_pkey'
}

/** input type for inserting data into table "personnel" */
export type Personnel_Insert_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  personnel_category?: InputMaybe<Personnel_Categories_Obj_Rel_Insert_Input>;
  personnel_category_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Personnel_Max_Fields = {
  __typename?: 'personnel_max_fields';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  personnel_category_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "personnel" */
export type Personnel_Max_Order_By = {
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  personnel_category_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Personnel_Min_Fields = {
  __typename?: 'personnel_min_fields';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  personnel_category_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "personnel" */
export type Personnel_Min_Order_By = {
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  personnel_category_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "personnel" */
export type Personnel_Mutation_Response = {
  __typename?: 'personnel_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Personnel>;
};

/** on_conflict condition type for table "personnel" */
export type Personnel_On_Conflict = {
  constraint: Personnel_Constraint;
  update_columns?: Array<Personnel_Update_Column>;
  where?: InputMaybe<Personnel_Bool_Exp>;
};

/** Ordering options when selecting data from "personnel". */
export type Personnel_Order_By = {
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  personnel_category?: InputMaybe<Personnel_Categories_Order_By>;
  personnel_category_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: personnel */
export type Personnel_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "personnel" */
export enum Personnel_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name',
  /** column name */
  PersonnelCategoryId = 'personnel_category_id'
}

/** input type for updating data in table "personnel" */
export type Personnel_Set_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  personnel_category_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "personnel" */
export type Personnel_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Personnel_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Personnel_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  personnel_category_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "personnel" */
export enum Personnel_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name',
  /** column name */
  PersonnelCategoryId = 'personnel_category_id'
}

export type Personnel_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Personnel_Set_Input>;
  /** filter the rows which have to be updated */
  where: Personnel_Bool_Exp;
};

/** columns and relationships of "products" */
export type Products = {
  __typename?: 'products';
  description: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  image: Scalars['String']['output'];
  price: Scalars['numeric']['output'];
  /** An object relationship */
  products_category?: Maybe<Products_Categories>;
  products_category_id?: Maybe<Scalars['uuid']['output']>;
  title: Scalars['String']['output'];
  weight: Scalars['numeric']['output'];
};

/** aggregated selection of "products" */
export type Products_Aggregate = {
  __typename?: 'products_aggregate';
  aggregate?: Maybe<Products_Aggregate_Fields>;
  nodes: Array<Products>;
};

export type Products_Aggregate_Bool_Exp = {
  count?: InputMaybe<Products_Aggregate_Bool_Exp_Count>;
};

export type Products_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Products_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Products_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "products" */
export type Products_Aggregate_Fields = {
  __typename?: 'products_aggregate_fields';
  avg?: Maybe<Products_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Products_Max_Fields>;
  min?: Maybe<Products_Min_Fields>;
  stddev?: Maybe<Products_Stddev_Fields>;
  stddev_pop?: Maybe<Products_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Products_Stddev_Samp_Fields>;
  sum?: Maybe<Products_Sum_Fields>;
  var_pop?: Maybe<Products_Var_Pop_Fields>;
  var_samp?: Maybe<Products_Var_Samp_Fields>;
  variance?: Maybe<Products_Variance_Fields>;
};


/** aggregate fields of "products" */
export type Products_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Products_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "products" */
export type Products_Aggregate_Order_By = {
  avg?: InputMaybe<Products_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Products_Max_Order_By>;
  min?: InputMaybe<Products_Min_Order_By>;
  stddev?: InputMaybe<Products_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Products_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Products_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Products_Sum_Order_By>;
  var_pop?: InputMaybe<Products_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Products_Var_Samp_Order_By>;
  variance?: InputMaybe<Products_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "products" */
export type Products_Arr_Rel_Insert_Input = {
  data: Array<Products_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Products_On_Conflict>;
};

/** aggregate avg on columns */
export type Products_Avg_Fields = {
  __typename?: 'products_avg_fields';
  price?: Maybe<Scalars['Float']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "products" */
export type Products_Avg_Order_By = {
  price?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "products". All fields are combined with a logical 'AND'. */
export type Products_Bool_Exp = {
  _and?: InputMaybe<Array<Products_Bool_Exp>>;
  _not?: InputMaybe<Products_Bool_Exp>;
  _or?: InputMaybe<Array<Products_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  products_category?: InputMaybe<Products_Categories_Bool_Exp>;
  products_category_id?: InputMaybe<Uuid_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  weight?: InputMaybe<Numeric_Comparison_Exp>;
};

/** columns and relationships of "products_categories" */
export type Products_Categories = {
  __typename?: 'products_categories';
  id: Scalars['uuid']['output'];
  /** An array relationship */
  products_items: Array<Products>;
  /** An aggregate relationship */
  products_items_aggregate: Products_Aggregate;
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
};


/** columns and relationships of "products_categories" */
export type Products_CategoriesProducts_ItemsArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


/** columns and relationships of "products_categories" */
export type Products_CategoriesProducts_Items_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};

/** aggregated selection of "products_categories" */
export type Products_Categories_Aggregate = {
  __typename?: 'products_categories_aggregate';
  aggregate?: Maybe<Products_Categories_Aggregate_Fields>;
  nodes: Array<Products_Categories>;
};

/** aggregate fields of "products_categories" */
export type Products_Categories_Aggregate_Fields = {
  __typename?: 'products_categories_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Products_Categories_Max_Fields>;
  min?: Maybe<Products_Categories_Min_Fields>;
};


/** aggregate fields of "products_categories" */
export type Products_Categories_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Products_Categories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "products_categories". All fields are combined with a logical 'AND'. */
export type Products_Categories_Bool_Exp = {
  _and?: InputMaybe<Array<Products_Categories_Bool_Exp>>;
  _not?: InputMaybe<Products_Categories_Bool_Exp>;
  _or?: InputMaybe<Array<Products_Categories_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  products_items?: InputMaybe<Products_Bool_Exp>;
  products_items_aggregate?: InputMaybe<Products_Aggregate_Bool_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "products_categories" */
export enum Products_Categories_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProductsCategoriesPkey1 = 'products_categories_pkey1'
}

/** input type for inserting data into table "products_categories" */
export type Products_Categories_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  products_items?: InputMaybe<Products_Arr_Rel_Insert_Input>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Products_Categories_Max_Fields = {
  __typename?: 'products_categories_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Products_Categories_Min_Fields = {
  __typename?: 'products_categories_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "products_categories" */
export type Products_Categories_Mutation_Response = {
  __typename?: 'products_categories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Products_Categories>;
};

/** input type for inserting object relation for remote table "products_categories" */
export type Products_Categories_Obj_Rel_Insert_Input = {
  data: Products_Categories_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Products_Categories_On_Conflict>;
};

/** on_conflict condition type for table "products_categories" */
export type Products_Categories_On_Conflict = {
  constraint: Products_Categories_Constraint;
  update_columns?: Array<Products_Categories_Update_Column>;
  where?: InputMaybe<Products_Categories_Bool_Exp>;
};

/** Ordering options when selecting data from "products_categories". */
export type Products_Categories_Order_By = {
  id?: InputMaybe<Order_By>;
  products_items_aggregate?: InputMaybe<Products_Aggregate_Order_By>;
  slug?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** primary key columns input for table: products_categories */
export type Products_Categories_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "products_categories" */
export enum Products_Categories_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Slug = 'slug',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "products_categories" */
export type Products_Categories_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "products_categories" */
export type Products_Categories_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Products_Categories_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Products_Categories_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "products_categories" */
export enum Products_Categories_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Slug = 'slug',
  /** column name */
  Title = 'title'
}

export type Products_Categories_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Products_Categories_Set_Input>;
  /** filter the rows which have to be updated */
  where: Products_Categories_Bool_Exp;
};

/** unique or primary key constraints on table "products" */
export enum Products_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProductsPkey = 'products_pkey'
}

/** input type for incrementing numeric columns in table "products" */
export type Products_Inc_Input = {
  price?: InputMaybe<Scalars['numeric']['input']>;
  weight?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "products" */
export type Products_Insert_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  products_category?: InputMaybe<Products_Categories_Obj_Rel_Insert_Input>;
  products_category_id?: InputMaybe<Scalars['uuid']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  weight?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate max on columns */
export type Products_Max_Fields = {
  __typename?: 'products_max_fields';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  products_category_id?: Maybe<Scalars['uuid']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  weight?: Maybe<Scalars['numeric']['output']>;
};

/** order by max() on columns of table "products" */
export type Products_Max_Order_By = {
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  products_category_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Products_Min_Fields = {
  __typename?: 'products_min_fields';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['numeric']['output']>;
  products_category_id?: Maybe<Scalars['uuid']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  weight?: Maybe<Scalars['numeric']['output']>;
};

/** order by min() on columns of table "products" */
export type Products_Min_Order_By = {
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  products_category_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "products" */
export type Products_Mutation_Response = {
  __typename?: 'products_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Products>;
};

/** on_conflict condition type for table "products" */
export type Products_On_Conflict = {
  constraint: Products_Constraint;
  update_columns?: Array<Products_Update_Column>;
  where?: InputMaybe<Products_Bool_Exp>;
};

/** Ordering options when selecting data from "products". */
export type Products_Order_By = {
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  products_category?: InputMaybe<Products_Categories_Order_By>;
  products_category_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** primary key columns input for table: products */
export type Products_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "products" */
export enum Products_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Price = 'price',
  /** column name */
  ProductsCategoryId = 'products_category_id',
  /** column name */
  Title = 'title',
  /** column name */
  Weight = 'weight'
}

/** input type for updating data in table "products" */
export type Products_Set_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  products_category_id?: InputMaybe<Scalars['uuid']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  weight?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate stddev on columns */
export type Products_Stddev_Fields = {
  __typename?: 'products_stddev_fields';
  price?: Maybe<Scalars['Float']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "products" */
export type Products_Stddev_Order_By = {
  price?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Products_Stddev_Pop_Fields = {
  __typename?: 'products_stddev_pop_fields';
  price?: Maybe<Scalars['Float']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "products" */
export type Products_Stddev_Pop_Order_By = {
  price?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Products_Stddev_Samp_Fields = {
  __typename?: 'products_stddev_samp_fields';
  price?: Maybe<Scalars['Float']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "products" */
export type Products_Stddev_Samp_Order_By = {
  price?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "products" */
export type Products_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Products_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Products_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['numeric']['input']>;
  products_category_id?: InputMaybe<Scalars['uuid']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  weight?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate sum on columns */
export type Products_Sum_Fields = {
  __typename?: 'products_sum_fields';
  price?: Maybe<Scalars['numeric']['output']>;
  weight?: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "products" */
export type Products_Sum_Order_By = {
  price?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** update columns of table "products" */
export enum Products_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Price = 'price',
  /** column name */
  ProductsCategoryId = 'products_category_id',
  /** column name */
  Title = 'title',
  /** column name */
  Weight = 'weight'
}

export type Products_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Products_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Products_Set_Input>;
  /** filter the rows which have to be updated */
  where: Products_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Products_Var_Pop_Fields = {
  __typename?: 'products_var_pop_fields';
  price?: Maybe<Scalars['Float']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "products" */
export type Products_Var_Pop_Order_By = {
  price?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Products_Var_Samp_Fields = {
  __typename?: 'products_var_samp_fields';
  price?: Maybe<Scalars['Float']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "products" */
export type Products_Var_Samp_Order_By = {
  price?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Products_Variance_Fields = {
  __typename?: 'products_variance_fields';
  price?: Maybe<Scalars['Float']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "products" */
export type Products_Variance_Order_By = {
  price?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "admin" */
  admin: Array<Admin>;
  adminGetMe?: Maybe<AdminGetMeOutput>;
  adminLogin?: Maybe<AdminLoginOutput>;
  /** fetch aggregated fields from the table: "admin" */
  admin_aggregate: Admin_Aggregate;
  /** fetch data from the table: "admin" using primary key columns */
  admin_by_pk?: Maybe<Admin>;
  /** fetch data from the table: "advantages" */
  advantages: Array<Advantages>;
  /** fetch aggregated fields from the table: "advantages" */
  advantages_aggregate: Advantages_Aggregate;
  /** fetch data from the table: "advantages" using primary key columns */
  advantages_by_pk?: Maybe<Advantages>;
  cloudinarySignature?: Maybe<CloudinarySignatureOutput>;
  /** fetch data from the table: "personnel" */
  personnel: Array<Personnel>;
  /** fetch aggregated fields from the table: "personnel" */
  personnel_aggregate: Personnel_Aggregate;
  /** fetch data from the table: "personnel" using primary key columns */
  personnel_by_pk?: Maybe<Personnel>;
  /** fetch data from the table: "personnel_categories" */
  personnel_categories: Array<Personnel_Categories>;
  /** fetch aggregated fields from the table: "personnel_categories" */
  personnel_categories_aggregate: Personnel_Categories_Aggregate;
  /** fetch data from the table: "personnel_categories" using primary key columns */
  personnel_categories_by_pk?: Maybe<Personnel_Categories>;
  /** fetch data from the table: "products" */
  products: Array<Products>;
  /** fetch aggregated fields from the table: "products" */
  products_aggregate: Products_Aggregate;
  /** fetch data from the table: "products" using primary key columns */
  products_by_pk?: Maybe<Products>;
  /** fetch data from the table: "products_categories" */
  products_categories: Array<Products_Categories>;
  /** fetch aggregated fields from the table: "products_categories" */
  products_categories_aggregate: Products_Categories_Aggregate;
  /** fetch data from the table: "products_categories" using primary key columns */
  products_categories_by_pk?: Maybe<Products_Categories>;
  /** fetch data from the table: "services" */
  services: Array<Services>;
  /** fetch aggregated fields from the table: "services" */
  services_aggregate: Services_Aggregate;
  /** fetch data from the table: "services" using primary key columns */
  services_by_pk?: Maybe<Services>;
};


export type Query_RootAdminArgs = {
  distinct_on?: InputMaybe<Array<Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Admin_Order_By>>;
  where?: InputMaybe<Admin_Bool_Exp>;
};


export type Query_RootAdminLoginArgs = {
  admin: AdminLoginInput;
};


export type Query_RootAdmin_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Admin_Order_By>>;
  where?: InputMaybe<Admin_Bool_Exp>;
};


export type Query_RootAdmin_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAdvantagesArgs = {
  distinct_on?: InputMaybe<Array<Advantages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Advantages_Order_By>>;
  where?: InputMaybe<Advantages_Bool_Exp>;
};


export type Query_RootAdvantages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Advantages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Advantages_Order_By>>;
  where?: InputMaybe<Advantages_Bool_Exp>;
};


export type Query_RootAdvantages_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootPersonnelArgs = {
  distinct_on?: InputMaybe<Array<Personnel_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Personnel_Order_By>>;
  where?: InputMaybe<Personnel_Bool_Exp>;
};


export type Query_RootPersonnel_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Personnel_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Personnel_Order_By>>;
  where?: InputMaybe<Personnel_Bool_Exp>;
};


export type Query_RootPersonnel_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootPersonnel_CategoriesArgs = {
  distinct_on?: InputMaybe<Array<Personnel_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Personnel_Categories_Order_By>>;
  where?: InputMaybe<Personnel_Categories_Bool_Exp>;
};


export type Query_RootPersonnel_Categories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Personnel_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Personnel_Categories_Order_By>>;
  where?: InputMaybe<Personnel_Categories_Bool_Exp>;
};


export type Query_RootPersonnel_Categories_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootProductsArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Query_RootProducts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Query_RootProducts_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootProducts_CategoriesArgs = {
  distinct_on?: InputMaybe<Array<Products_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Categories_Order_By>>;
  where?: InputMaybe<Products_Categories_Bool_Exp>;
};


export type Query_RootProducts_Categories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Products_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Categories_Order_By>>;
  where?: InputMaybe<Products_Categories_Bool_Exp>;
};


export type Query_RootProducts_Categories_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootServicesArgs = {
  distinct_on?: InputMaybe<Array<Services_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Services_Order_By>>;
  where?: InputMaybe<Services_Bool_Exp>;
};


export type Query_RootServices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Services_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Services_Order_By>>;
  where?: InputMaybe<Services_Bool_Exp>;
};


export type Query_RootServices_By_PkArgs = {
  id: Scalars['uuid']['input'];
};

/** columns and relationships of "services" */
export type Services = {
  __typename?: 'services';
  id: Scalars['uuid']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

/** aggregated selection of "services" */
export type Services_Aggregate = {
  __typename?: 'services_aggregate';
  aggregate?: Maybe<Services_Aggregate_Fields>;
  nodes: Array<Services>;
};

/** aggregate fields of "services" */
export type Services_Aggregate_Fields = {
  __typename?: 'services_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Services_Max_Fields>;
  min?: Maybe<Services_Min_Fields>;
};


/** aggregate fields of "services" */
export type Services_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Services_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "services". All fields are combined with a logical 'AND'. */
export type Services_Bool_Exp = {
  _and?: InputMaybe<Array<Services_Bool_Exp>>;
  _not?: InputMaybe<Services_Bool_Exp>;
  _or?: InputMaybe<Array<Services_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "services" */
export enum Services_Constraint {
  /** unique or primary key constraint on columns "id" */
  ServicesPkey = 'services_pkey'
}

/** input type for inserting data into table "services" */
export type Services_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Services_Max_Fields = {
  __typename?: 'services_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Services_Min_Fields = {
  __typename?: 'services_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "services" */
export type Services_Mutation_Response = {
  __typename?: 'services_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Services>;
};

/** on_conflict condition type for table "services" */
export type Services_On_Conflict = {
  constraint: Services_Constraint;
  update_columns?: Array<Services_Update_Column>;
  where?: InputMaybe<Services_Bool_Exp>;
};

/** Ordering options when selecting data from "services". */
export type Services_Order_By = {
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: services */
export type Services_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "services" */
export enum Services_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "services" */
export type Services_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "services" */
export type Services_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Services_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Services_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "services" */
export enum Services_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name'
}

export type Services_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Services_Set_Input>;
  /** filter the rows which have to be updated */
  where: Services_Bool_Exp;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "admin" */
  admin: Array<Admin>;
  /** fetch aggregated fields from the table: "admin" */
  admin_aggregate: Admin_Aggregate;
  /** fetch data from the table: "admin" using primary key columns */
  admin_by_pk?: Maybe<Admin>;
  /** fetch data from the table in a streaming manner: "admin" */
  admin_stream: Array<Admin>;
  /** fetch data from the table: "advantages" */
  advantages: Array<Advantages>;
  /** fetch aggregated fields from the table: "advantages" */
  advantages_aggregate: Advantages_Aggregate;
  /** fetch data from the table: "advantages" using primary key columns */
  advantages_by_pk?: Maybe<Advantages>;
  /** fetch data from the table in a streaming manner: "advantages" */
  advantages_stream: Array<Advantages>;
  /** fetch data from the table: "personnel" */
  personnel: Array<Personnel>;
  /** fetch aggregated fields from the table: "personnel" */
  personnel_aggregate: Personnel_Aggregate;
  /** fetch data from the table: "personnel" using primary key columns */
  personnel_by_pk?: Maybe<Personnel>;
  /** fetch data from the table: "personnel_categories" */
  personnel_categories: Array<Personnel_Categories>;
  /** fetch aggregated fields from the table: "personnel_categories" */
  personnel_categories_aggregate: Personnel_Categories_Aggregate;
  /** fetch data from the table: "personnel_categories" using primary key columns */
  personnel_categories_by_pk?: Maybe<Personnel_Categories>;
  /** fetch data from the table in a streaming manner: "personnel_categories" */
  personnel_categories_stream: Array<Personnel_Categories>;
  /** fetch data from the table in a streaming manner: "personnel" */
  personnel_stream: Array<Personnel>;
  /** fetch data from the table: "products" */
  products: Array<Products>;
  /** fetch aggregated fields from the table: "products" */
  products_aggregate: Products_Aggregate;
  /** fetch data from the table: "products" using primary key columns */
  products_by_pk?: Maybe<Products>;
  /** fetch data from the table: "products_categories" */
  products_categories: Array<Products_Categories>;
  /** fetch aggregated fields from the table: "products_categories" */
  products_categories_aggregate: Products_Categories_Aggregate;
  /** fetch data from the table: "products_categories" using primary key columns */
  products_categories_by_pk?: Maybe<Products_Categories>;
  /** fetch data from the table in a streaming manner: "products_categories" */
  products_categories_stream: Array<Products_Categories>;
  /** fetch data from the table in a streaming manner: "products" */
  products_stream: Array<Products>;
  /** fetch data from the table: "services" */
  services: Array<Services>;
  /** fetch aggregated fields from the table: "services" */
  services_aggregate: Services_Aggregate;
  /** fetch data from the table: "services" using primary key columns */
  services_by_pk?: Maybe<Services>;
  /** fetch data from the table in a streaming manner: "services" */
  services_stream: Array<Services>;
};


export type Subscription_RootAdminArgs = {
  distinct_on?: InputMaybe<Array<Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Admin_Order_By>>;
  where?: InputMaybe<Admin_Bool_Exp>;
};


export type Subscription_RootAdmin_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Admin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Admin_Order_By>>;
  where?: InputMaybe<Admin_Bool_Exp>;
};


export type Subscription_RootAdmin_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAdmin_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Admin_Stream_Cursor_Input>>;
  where?: InputMaybe<Admin_Bool_Exp>;
};


export type Subscription_RootAdvantagesArgs = {
  distinct_on?: InputMaybe<Array<Advantages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Advantages_Order_By>>;
  where?: InputMaybe<Advantages_Bool_Exp>;
};


export type Subscription_RootAdvantages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Advantages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Advantages_Order_By>>;
  where?: InputMaybe<Advantages_Bool_Exp>;
};


export type Subscription_RootAdvantages_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAdvantages_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Advantages_Stream_Cursor_Input>>;
  where?: InputMaybe<Advantages_Bool_Exp>;
};


export type Subscription_RootPersonnelArgs = {
  distinct_on?: InputMaybe<Array<Personnel_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Personnel_Order_By>>;
  where?: InputMaybe<Personnel_Bool_Exp>;
};


export type Subscription_RootPersonnel_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Personnel_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Personnel_Order_By>>;
  where?: InputMaybe<Personnel_Bool_Exp>;
};


export type Subscription_RootPersonnel_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootPersonnel_CategoriesArgs = {
  distinct_on?: InputMaybe<Array<Personnel_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Personnel_Categories_Order_By>>;
  where?: InputMaybe<Personnel_Categories_Bool_Exp>;
};


export type Subscription_RootPersonnel_Categories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Personnel_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Personnel_Categories_Order_By>>;
  where?: InputMaybe<Personnel_Categories_Bool_Exp>;
};


export type Subscription_RootPersonnel_Categories_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootPersonnel_Categories_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Personnel_Categories_Stream_Cursor_Input>>;
  where?: InputMaybe<Personnel_Categories_Bool_Exp>;
};


export type Subscription_RootPersonnel_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Personnel_Stream_Cursor_Input>>;
  where?: InputMaybe<Personnel_Bool_Exp>;
};


export type Subscription_RootProductsArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Subscription_RootProducts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Subscription_RootProducts_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootProducts_CategoriesArgs = {
  distinct_on?: InputMaybe<Array<Products_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Categories_Order_By>>;
  where?: InputMaybe<Products_Categories_Bool_Exp>;
};


export type Subscription_RootProducts_Categories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Products_Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Categories_Order_By>>;
  where?: InputMaybe<Products_Categories_Bool_Exp>;
};


export type Subscription_RootProducts_Categories_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootProducts_Categories_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Products_Categories_Stream_Cursor_Input>>;
  where?: InputMaybe<Products_Categories_Bool_Exp>;
};


export type Subscription_RootProducts_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Products_Stream_Cursor_Input>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Subscription_RootServicesArgs = {
  distinct_on?: InputMaybe<Array<Services_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Services_Order_By>>;
  where?: InputMaybe<Services_Bool_Exp>;
};


export type Subscription_RootServices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Services_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Services_Order_By>>;
  where?: InputMaybe<Services_Bool_Exp>;
};


export type Subscription_RootServices_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootServices_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Services_Stream_Cursor_Input>>;
  where?: InputMaybe<Services_Bool_Exp>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

export type AdimGetMeQueryVariables = Exact<{ [key: string]: never; }>;


export type AdimGetMeQuery = { __typename?: 'query_root', adminGetMe?: { __typename?: 'AdminGetMeOutput', id: string, username: string } | null };

export type AdminLoginQueryVariables = Exact<{
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
}>;


export type AdminLoginQuery = { __typename?: 'query_root', adminLogin?: { __typename?: 'adminLoginOutput', accessToken: string } | null };

export type CloudinarySignatureQueryVariables = Exact<{ [key: string]: never; }>;


export type CloudinarySignatureQuery = { __typename?: 'query_root', cloudinarySignature?: { __typename?: 'CloudinarySignatureOutput', apiKey: string, cloudName: string, publicId: string, signature: string, timestamp: number } | null };


export const AdimGetMeDocument = gql`
    query AdimGetMe {
  adminGetMe {
    id
    username
  }
}
    `;

/**
 * __useAdimGetMeQuery__
 *
 * To run a query within a React component, call `useAdimGetMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdimGetMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdimGetMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useAdimGetMeQuery(baseOptions?: Apollo.QueryHookOptions<AdimGetMeQuery, AdimGetMeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AdimGetMeQuery, AdimGetMeQueryVariables>(AdimGetMeDocument, options);
      }
export function useAdimGetMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AdimGetMeQuery, AdimGetMeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AdimGetMeQuery, AdimGetMeQueryVariables>(AdimGetMeDocument, options);
        }
export function useAdimGetMeSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<AdimGetMeQuery, AdimGetMeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AdimGetMeQuery, AdimGetMeQueryVariables>(AdimGetMeDocument, options);
        }
export type AdimGetMeQueryHookResult = ReturnType<typeof useAdimGetMeQuery>;
export type AdimGetMeLazyQueryHookResult = ReturnType<typeof useAdimGetMeLazyQuery>;
export type AdimGetMeSuspenseQueryHookResult = ReturnType<typeof useAdimGetMeSuspenseQuery>;
export type AdimGetMeQueryResult = Apollo.QueryResult<AdimGetMeQuery, AdimGetMeQueryVariables>;
export const AdminLoginDocument = gql`
    query AdminLogin($password: String!, $username: String!) {
  adminLogin(admin: {password: $password, username: $username}) {
    accessToken
  }
}
    `;

/**
 * __useAdminLoginQuery__
 *
 * To run a query within a React component, call `useAdminLoginQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminLoginQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminLoginQuery({
 *   variables: {
 *      password: // value for 'password'
 *      username: // value for 'username'
 *   },
 * });
 */
export function useAdminLoginQuery(baseOptions: Apollo.QueryHookOptions<AdminLoginQuery, AdminLoginQueryVariables> & ({ variables: AdminLoginQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AdminLoginQuery, AdminLoginQueryVariables>(AdminLoginDocument, options);
      }
export function useAdminLoginLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AdminLoginQuery, AdminLoginQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AdminLoginQuery, AdminLoginQueryVariables>(AdminLoginDocument, options);
        }
export function useAdminLoginSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<AdminLoginQuery, AdminLoginQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AdminLoginQuery, AdminLoginQueryVariables>(AdminLoginDocument, options);
        }
export type AdminLoginQueryHookResult = ReturnType<typeof useAdminLoginQuery>;
export type AdminLoginLazyQueryHookResult = ReturnType<typeof useAdminLoginLazyQuery>;
export type AdminLoginSuspenseQueryHookResult = ReturnType<typeof useAdminLoginSuspenseQuery>;
export type AdminLoginQueryResult = Apollo.QueryResult<AdminLoginQuery, AdminLoginQueryVariables>;
export const CloudinarySignatureDocument = gql`
    query CloudinarySignature {
  cloudinarySignature {
    apiKey
    cloudName
    publicId
    signature
    timestamp
  }
}
    `;

/**
 * __useCloudinarySignatureQuery__
 *
 * To run a query within a React component, call `useCloudinarySignatureQuery` and pass it any options that fit your needs.
 * When your component renders, `useCloudinarySignatureQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCloudinarySignatureQuery({
 *   variables: {
 *   },
 * });
 */
export function useCloudinarySignatureQuery(baseOptions?: Apollo.QueryHookOptions<CloudinarySignatureQuery, CloudinarySignatureQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CloudinarySignatureQuery, CloudinarySignatureQueryVariables>(CloudinarySignatureDocument, options);
      }
export function useCloudinarySignatureLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CloudinarySignatureQuery, CloudinarySignatureQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CloudinarySignatureQuery, CloudinarySignatureQueryVariables>(CloudinarySignatureDocument, options);
        }
export function useCloudinarySignatureSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CloudinarySignatureQuery, CloudinarySignatureQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CloudinarySignatureQuery, CloudinarySignatureQueryVariables>(CloudinarySignatureDocument, options);
        }
export type CloudinarySignatureQueryHookResult = ReturnType<typeof useCloudinarySignatureQuery>;
export type CloudinarySignatureLazyQueryHookResult = ReturnType<typeof useCloudinarySignatureLazyQuery>;
export type CloudinarySignatureSuspenseQueryHookResult = ReturnType<typeof useCloudinarySignatureSuspenseQuery>;
export type CloudinarySignatureQueryResult = Apollo.QueryResult<CloudinarySignatureQuery, CloudinarySignatureQueryVariables>;