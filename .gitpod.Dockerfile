FROM gitpod/workspace-full-vnc:latest

USER gitpod

CMD echo "Starting Next.js"




RUN sudo apt-get update \
    
    && sudo apt-get install -y jwm \
    
    && sudo apt-get install -y libgtk-3-0 libnss3 libasound2 \
    
    && sudo apt-get install -y libx11-dev libxkbfile-dev
RUN sudo apt-get update \
    && sudo apt-get install -y \
        libasound2-dev \
        libgtk-3-dev \
        libnss3-dev
