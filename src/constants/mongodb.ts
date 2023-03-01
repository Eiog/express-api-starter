const config = {
  user: '',
  password: '',
  location: '',
  port: '',
  database: '',
}
export const MongodbUrl = () => `mongodb://${config.user}:${config.password}@${config.location}:${config.port}/${config.database}`
