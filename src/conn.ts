/* import mysql, { Connection } from 'mysql2/promise'
import { NextApiRequest, NextApiResponse } from 'next'

interface IDbConfig {
  port: number
  db: string
  host: string
  user: string
  password: string
}

class DbConnection {
  private connection!: Connection

  // eslint-disable-next-line no-useless-constructor
  constructor(private config: IDbConfig) {}

  public async connect(): Promise<void> {
    this.connection = await mysql.createConnection({
      host: this.config.host,
      port: this.config.port,
      user: this.config.user,
      password: this.config.password
    })
    console.log('Connected to database!')
  }

  public async createDatabase(): Promise<void> {
    await this.connection.execute(
      `CREATE DATABASE IF NOT EXISTS ${this.config.db}`
    )
    console.log('Database created!')
  }

  public async disconnect(): Promise<void> {
    await this.connection.end()
    console.log('Disconnected from database!')
  }
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const dbConfig: IDbConfig = {
    db: 'IFC',
    port: 3306,
    user: 'root',
    host: 'localhost',
    password: '20020000'
  }
  const dbConnection = new DbConnection(dbConfig)

  try {
    await dbConnection.connect()
    await dbConnection.createDatabase()
    await dbConnection.disconnect()
    res.status(200).send('Database created successfully!')
  } catch (error) {
    console.error('Error creating database: ', error)
    res.status(500).send('Error creating database')
  }
}
 */
