const destroy = async (pool, options) => {
  const { createAdapter } = pool

  const adapter = createAdapter({
    awsSecretStoreArn: options.awsSecretStoreAdminArn,
    dbClusterOrInstanceArn: options.dbClusterOrInstanceArn,
    databaseName: 'mysql',
    region: options.region,
    resourceOptions: {
      databaseName: options.databaseName,
      userLogin: options.userLogin
    },
    skipInit: true
  })

  await adapter.drop(options)
}

export default destroy
