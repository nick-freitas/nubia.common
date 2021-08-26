export const validate = (payload: {
  sub: string;
  email: string;
  exp: number;
}) => ({
  userId: payload.sub,
  email: payload.email,
  expiration: payload.exp,
});
