/**
 * Created by devworx on 4/20/17.
 */
/*eslint-disable no-console*/
import webpack from 'webpack'
import webpackConfig from '../webpack.config.prod'
import chalk from 'chalk'

/* babel looks for this env variable to determine how they are built*/
process.env.NODE_ENV = 'production'
console.log(chalk.blue('Generating minified bundle for production. This will take some time...'))

webpack(webpackConfig).run((err, stats) => {
  if (err) { //so a fatal error occurred. Stop here.
    console.log(chalk.red(err))
    // 1 = error
    return 1
  }
  /* Assure that warning errors and stats are displayed to console using plain js. */
  const jsonStats = stats.toJson()

  if (jsonStats.hasErrors){
    return jsonStats.errors.map(error => console.log(chalk.red(error)))
  }
  if (jsonStats.hasWarnings) {
    console.log(chalk.yellow('Webpack generated the following warning: '))
    jsonStats.warnings.map(warning => console.log(chalk.yellow(warning)))
  }
  console.log(`Webpack stats: ${stats}`)

  /* if we got this far, the build succeeded */
  console.log(chalk.green('Your app has been built for production and written to /dist!'))
  // 0 = success
  return 0
})
