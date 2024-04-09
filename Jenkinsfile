pipeline {
    agent any

    stages {
        stage('Baixar fonte') {
            steps { 
                    sh 'ssh ubuntu@172.17.0.1 "rm -rf /home/ubuntu/apps/SistemaSolar"'
                    sh 'ssh ubuntu@172.17.0.1 "mkdir -p /home/ubuntu/apps/SistemaSolar"'
                    sh 'scp -r /var/jenkins_home/workspace/SistemaSolar/. ubuntu@172.17.0.1:/home/ubuntu/apps/SistemaSolar'
            } 
        }
        stage('Instalar') {
            steps {
                        sh 'ssh ubuntu@172.17.0.1 "cd /home/ubuntu/apps/SistemaSolar;npm install"'
            }
        }
        stage('Construir') {
            steps {
                        sh 'ssh ubuntu@172.17.0.1 "cd /home/ubuntu/apps/SistemaSolar;npm run build"'
            }
        }
        stage('Iniciar') { 
            steps {
                    sh 'ssh ubuntu@172.17.0.1 "cd /home/ubuntu/apps/SistemaSolar;export JENKINS_NODE_COOKIE=dontKillMe;pm2 stop SistemaSolar -s"'
                    sh 'ssh ubuntu@172.17.0.1 "cd /home/ubuntu/apps/SistemaSolar;export JENKINS_NODE_COOKIE=dontKillMe;pm2 delete SistemaSolar -s"'
                    sh 'ssh ubuntu@172.17.0.1 "cd /home/ubuntu/apps/SistemaSolar;pm2 start -n SistemaSolar npm -- start;pm2 save --force"' 
            }
        }
    }
}
