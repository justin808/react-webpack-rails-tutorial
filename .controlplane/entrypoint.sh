#!/bin/sh

wait_for_service()
{
  until curl -I -sS $1 2>&1 | grep -q "Empty reply from server"; do
    echo " -- $1 is unavailable, sleeping..."
    sleep 1
  done
  echo " -- $1 is available"
}

echo " -- Starting entrypoint.sh"

echo " -- Waiting for services"
wait_for_service $(echo $DATABASE_URL | sed -e 's|^.*@||' -e 's|/.*$||')
wait_for_service $(echo $REDIS_URL | sed -e 's|redis://||' -e 's|/.*$||')

echo " -- Preparing database"
rails db:prepare

echo " -- Finishing entrypoint.sh, executing '$@'"
exec "$@"
