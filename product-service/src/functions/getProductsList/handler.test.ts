import { APIGatewayProxyResult } from 'aws-lambda';
import { getProductsList } from './handler';

describe('getProductsList handler', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return successful response', async () => {
    const result: APIGatewayProxyResult = await getProductsList();
    expect(result.statusCode).toEqual(200);
  });
});
