pipeline {
    agent any

    tools {
        nodejs 'node'
    }

    stages {
        stage('Install') {
            steps {
                git branch: 'main', url: 'https://github.com/LugardoRodrigo/hoyqueda.git'
                bat 'npm install'
            }
        }



        stage('Build') {
            steps {
                bat 'npm run ng build --base-href="./"'
            }
        }

        stage('Deploy') {
            steps {
                bat 'firebase deploy --token %FIREBASE_TOKEN%'
            }
        }
    }

}
