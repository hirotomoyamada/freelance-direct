export const defaultValues = (user) => {
  return {
    icon: user?.icon,
    cover: user?.cover,
    email: user?.profile?.email,

    name: user?.profile?.name,
    body: user?.profile?.body,
    age: user?.profile?.age,
    sex: user?.profile?.sex,
    position: user?.profile?.position,
    location: user?.profile?.location,
    period: user?.profile?.period,

    handles: user?.profile?.handles?.[0]
      ? user?.profile?.handles.map((value) => ({
          handle: value,
        }))
      : [{ handle: "" }, { handle: "" }, { handle: "" }, { handle: "" }],
    tools: user?.profile?.tools?.[0]
      ? user?.profile?.tools.map((value) => ({
          tool: value,
        }))
      : [{ tool: "" }, { tool: "" }, { tool: "" }, { tool: "" }],
    skills: user?.profile?.skills?.[0]
      ? user?.profile?.skills.map((value) => ({
          skill: value,
        }))
      : [{ skill: "" }, { skill: "" }, { skill: "" }],
    urls: user?.profile?.urls?.[0]
      ? user?.profile?.urls.map((value) => ({
          url: value,
        }))
      : [{ url: "" }],

    resident: user?.profile?.resident ? user?.profile?.resident : "常駐可",
    working: user?.profile?.working ? user?.profile?.working : 3,
    clothes: user?.profile?.clothes ? user?.profile?.clothes : "カジュアル",
    costs: user?.profile?.costs,
  };
};
