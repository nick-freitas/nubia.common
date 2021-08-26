export const validate = async (payload: { sub: string; email: string }) => ({
  userId: payload.sub,
  email: payload.email,
});
