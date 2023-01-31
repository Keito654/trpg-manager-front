export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      Group: {
        Row: {
          created_at: string | null;
          group_description: string | null;
          group_id: string;
          group_key: string | null;
          group_name: string | null;
          updated_at: string | null;
        };
        Insert: {
          created_at?: string | null;
          group_description?: string | null;
          group_id?: string;
          group_key?: string | null;
          group_name?: string | null;
          updated_at?: string | null;
        };
        Update: {
          created_at?: string | null;
          group_description?: string | null;
          group_id?: string;
          group_key?: string | null;
          group_name?: string | null;
          updated_at?: string | null;
        };
      };
      GroupHas: {
        Row: {
          group_id: string;
          user_id: string;
        };
        Insert: {
          group_id: string;
          user_id: string;
        };
        Update: {
          group_id?: string;
          user_id?: string;
        };
      };
      ScenarioList: {
        Row: {
          created_at: string | null;
          created_by: string | null;
          group_id: string | null;
          image_key: string | null;
          read_by: string | null;
          scenario_description: string | null;
          scenario_name: string | null;
          scenario_number: number;
          updated_at: string | null;
          updated_by: string | null;
        };
        Insert: {
          created_at?: string | null;
          created_by?: string | null;
          group_id?: string | null;
          image_key?: string | null;
          read_by?: string | null;
          scenario_description?: string | null;
          scenario_name?: string | null;
          scenario_number?: number;
          updated_at?: string | null;
          updated_by?: string | null;
        };
        Update: {
          created_at?: string | null;
          created_by?: string | null;
          group_id?: string | null;
          image_key?: string | null;
          read_by?: string | null;
          scenario_description?: string | null;
          scenario_name?: string | null;
          scenario_number?: number;
          updated_at?: string | null;
          updated_by?: string | null;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
}
