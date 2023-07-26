export type Member = {
  id: string;
  name: string;
  period: string;
  roles: string[];
  introduction?: string;
  image: string;
  createdAt: string;
};

export type SimpleMember = Pick<Member, "name" | "period" | "roles">;
