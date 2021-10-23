export interface Root {
  data: IProjectStatus;
}

export interface IProjectStatus {
  projects: ProjectStatus[];
  count: number;
}

export interface ProjectStatus {
  id: string;
  project_owner: string;
  title: string;
  short_link: string;
  research_method: string;
  description: string;
  cover: string;
  logo_product: string;
  visibility: string;
  status: string;
  incentive: Incentive;
  finish_date: string;
  tester_quota: number;
  tester_join: number;
  task_instruction: string;
  created_by: string;
  updated_at: string;
  created_at: string;
  updated_by: string;
}

export interface Incentive {
  Register: number;
  Finish: number;
  Bonus: number;
}
