exports.handler = async () => {
    const mySecret = process.env.MY_KEY;
    return {
      statusCode: 200,
      body: `hello world! I have a ${mySecret}`,
    };
  };