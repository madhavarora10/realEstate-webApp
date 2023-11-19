import { logger } from './logger';

const jwt = require('jsonwebtoken');

const decode = (token: string) => {
  try {
    const key = `-----BEGIN CERTIFICATE-----
MIIDDTCCAfWgAwIBAgIJGfRXovwWLRegMA0GCSqGSIb3DQEBCwUAMCQxIjAgBgNV
BAMTGWRldi1hNmdncTRvYy51cy5hdXRoMC5jb20wHhcNMjIwNDA4MDQwNTA5WhcN
MzUxMjE2MDQwNTA5WjAkMSIwIAYDVQQDExlkZXYtYTZnZ3E0b2MudXMuYXV0aDAu
Y29tMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA0EMQKSJEcgal4uVp
5R7D/5nO8e89bQpiJsav7lZ83GAVUzcn1c/6VFowVQGIG69SYGgaBgfm9Zq9gzxr
71voZBTOJZnbWCyoFH1mmHFAOTwpYI8NOM/wJ5f60oLHSWZG5LXo6e6g+ExpHqrb
X6JARtq2dT0nTuYyui7YTjXyzvuO0q0KK5f7tgtwB8tCfPyQXbkrzuZNp57BmNj9
ownBpcZO9B2GroultVDMpHYv/zLiFDfltTasUaD3q2X+B5TQDV13Gv/YwxR31up6
PwDfmK9smkFYfCy5uM+MOyQqLFsX+kyoSEkeyeGToTU223heLy2lnwR+5u/Wtgpg
epqTLwIDAQABo0IwQDAPBgNVHRMBAf8EBTADAQH/MB0GA1UdDgQWBBSRWNi0S3o8
qbenOeNYvQZXaTzDJDAOBgNVHQ8BAf8EBAMCAoQwDQYJKoZIhvcNAQELBQADggEB
AEiAyQG0V7yhURsPW9fmqdpAIm5BtuRzjnS6lnKWlUPW6qlb0YhGb+VEHMf0OMAG
ImxLFKMSvvFTC9QSlOaQUbnm6Q1MfLw1NgIM0mFpQYod5bLZMWFTkckIuOZj7IQy
HIapIVv7Oejy0/Avyk2q2bRHqtKSbfuHlFSKPVyIzaOdiP0j+PhOwH8LOZ1jjxrW
zQFq3sJKmFxh9jMveG+FGwNO1qDLvPDcur7fal8gFKsxyFfRdBKTCE60aXBi2YhS
jpk9MeuaPJmlZ3Kzy6RieaXBhO0Yp8xNC8eZn+7T/HGogf3EKbIAZrvghXSJpmUq
bcWP6X5aHn3zpeap0moYsxA=
-----END CERTIFICATE-----`;

    const decoded = jwt.verify(token, key, { algorithms: ['RS256'] });

    return decoded;
  } catch (error) {
    logger.error(error);
  }
  return null;
};

const encode = () => {

};

export const jwtUtil = {
  decode,
  encode,
};
