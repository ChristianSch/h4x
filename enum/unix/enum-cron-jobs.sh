for user in `cat /etc/passwd | cut -d":" -f1`;
do 
    crontab -l -u $user;
done
