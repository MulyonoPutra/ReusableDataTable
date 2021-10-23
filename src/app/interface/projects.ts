export interface IProjects {
  data: Projects[];
  meta: Meta;
}

export interface Projects {
  title: string;
  type: string;
  description: string;
  view_logo: string;
  link: string;
  status: string;
  progress: number;
  incentiveTotal: number;
  testerQuota: number;
  testerJoin: number;
  expired: string;
  createdAt: string;
  updatedAt: string;
}

export interface Meta {
  count: number;
}
