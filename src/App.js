import { useRef, useState } from 'react';
import './App.css';

function SideMenu({ handleMenuClick }) {
  return (
    <div className="side-menu">
      <div class="home">
     <svg role="img" viewBox="0 0 78 24" aria-label="Spotify" aria-hidden="false"  height="40" width="40%" data-encore-id="logoSpotify" class="Svg-sc-6c3c1v-0 dDJltW" fill="#ffffff"><title>Spotify</title><path d="M31.8234 11.0782C29.8042 10.5836 29.4444 10.2376 29.4444 9.50832C29.4444 8.8202 30.077 8.35677 31.0159 8.35677C31.9262 8.35677 32.8296 8.70885 33.7765 9.43308C33.8051 9.45515 33.8407 9.46318 33.8763 9.45816C33.8937 9.45541 33.9104 9.4491 33.9253 9.43962C33.9403 9.43013 33.9532 9.41767 33.9633 9.40299L34.9496 7.97659C34.9691 7.9483 34.9774 7.91361 34.9728 7.87941C34.9682 7.84522 34.9511 7.81402 34.9249 7.79203C33.7982 6.86416 32.5291 6.41378 31.0456 6.41378C28.8653 6.41378 27.3422 7.75591 27.3422 9.67684C27.3422 11.7372 28.6567 12.4654 30.927 13.0292C32.8592 13.4856 33.1854 13.8688 33.1854 14.5529C33.1854 15.3102 32.5262 15.7817 31.4647 15.7817C30.2855 15.7817 29.3239 15.3744 28.2485 14.4185C28.2354 14.4066 28.22 14.3975 28.2033 14.3918C28.1866 14.3861 28.169 14.3839 28.1515 14.3853C28.1339 14.3867 28.1168 14.3917 28.1012 14.4C28.0856 14.4083 28.0719 14.4197 28.0607 14.4335L26.9547 15.7837C26.9322 15.8106 26.921 15.8454 26.9234 15.8806C26.9258 15.9158 26.9416 15.9487 26.9676 15.9722C28.2199 17.1188 29.7587 17.7236 31.4192 17.7236C33.7695 17.7236 35.2877 16.4066 35.2877 14.3683C35.2877 12.645 34.2845 11.6921 31.8234 11.0782ZM42.31 13.3873C42.31 14.8418 41.4363 15.8579 40.185 15.8579C38.9496 15.8579 38.0165 14.7966 38.0165 13.3873C38.0165 11.9789 38.9486 10.9177 40.186 10.9177C41.4165 10.9177 42.31 11.9559 42.31 13.3873ZM40.6041 9.03385C39.5861 9.03385 38.7499 9.44613 38.061 10.2897V9.3408C38.0613 9.30506 38.0476 9.27066 38.023 9.2451C37.9984 9.21955 37.9648 9.20491 37.9296 9.20438H36.1209C36.1033 9.20451 36.086 9.20814 36.0699 9.21507C36.0537 9.222 36.0391 9.23208 36.0268 9.24475C36.0145 9.25742 36.0048 9.27242 35.9982 9.2889C35.9916 9.30538 35.9883 9.32302 35.9884 9.3408V19.8873C35.9884 19.9626 36.0477 20.0237 36.1209 20.0237H37.9296C37.9648 20.0232 37.9984 20.0086 38.023 19.983C38.0476 19.9575 38.0613 19.9231 38.061 19.8873V16.5581C38.7509 17.3515 39.5861 17.7387 40.6041 17.7387C42.4968 17.7387 44.4123 16.2441 44.4123 13.3873C44.4123 10.5295 42.4968 9.03385 40.6041 9.03385ZM49.3235 15.8729C48.0267 15.8729 47.0502 14.8046 47.0502 13.3873C47.0502 11.9649 47.9931 10.9317 49.2938 10.9317C50.5985 10.9317 51.5819 12.001 51.5819 13.4194C51.5819 14.8408 50.6331 15.8729 49.3235 15.8729ZM49.3235 9.03486C46.8862 9.03486 44.9766 10.9608 44.9766 13.4184C44.9766 15.8499 46.8733 17.7557 49.2938 17.7557C51.739 17.7557 53.6545 15.8368 53.6545 13.3873C53.6545 10.9468 51.7529 9.03385 49.3235 9.03385V9.03486ZM58.8592 9.20438H56.8697V7.11795C56.8699 7.10013 56.8667 7.08243 56.8601 7.06589C56.8536 7.04935 56.8439 7.0343 56.8316 7.0216C56.8192 7.00891 56.8046 6.99883 56.7884 6.99195C56.7722 6.98507 56.7548 6.98152 56.7372 6.98153H54.9285C54.8935 6.98205 54.86 6.99655 54.8354 7.02189C54.8108 7.04723 54.797 7.08137 54.797 7.11694V9.20438H53.9273C53.9098 9.20451 53.8925 9.20815 53.8764 9.21509C53.8604 9.22203 53.8458 9.23213 53.8336 9.24481C53.8213 9.25749 53.8117 9.2725 53.8052 9.28898C53.7988 9.30545 53.7956 9.32306 53.7958 9.3408V10.9357C53.7958 11.0099 53.8551 11.0711 53.9273 11.0711H54.797V15.1969C54.797 16.864 55.6055 17.7096 57.2008 17.7096C57.8491 17.7096 58.3868 17.5722 58.8948 17.2763C58.9152 17.2644 58.9322 17.2474 58.944 17.2268C58.9558 17.2061 58.962 17.1827 58.962 17.1589V15.6402C58.962 15.6171 58.9561 15.5944 58.9451 15.5743C58.934 15.5541 58.9181 15.5371 58.8988 15.5249C58.8797 15.5128 58.8578 15.5059 58.8353 15.5048C58.8128 15.5038 58.7904 15.5086 58.7703 15.5188C58.4214 15.6994 58.0853 15.7817 57.7088 15.7817C57.1286 15.7817 56.8687 15.5108 56.8687 14.906V11.0701H58.8592C58.8768 11.07 58.8941 11.0664 58.9102 11.0594C58.9264 11.0525 58.941 11.0424 58.9533 11.0298C58.9656 11.0171 58.9753 11.0021 58.9819 10.9856C58.9885 10.9691 58.9918 10.9515 58.9917 10.9337V9.33879C58.9918 9.32106 58.9885 9.30347 58.9819 9.28705C58.9753 9.27062 58.9655 9.25569 58.9532 9.2431C58.9409 9.23051 58.9263 9.22052 58.9101 9.2137C58.894 9.20689 58.8767 9.20338 58.8592 9.20338V9.20438ZM65.7926 9.21241V8.95662C65.7926 8.20229 66.0743 7.86525 66.7069 7.86525C67.0834 7.86525 67.3869 7.94249 67.7259 8.05885C67.7458 8.06532 67.7669 8.06688 67.7876 8.06339C67.8082 8.0599 67.8277 8.05146 67.8445 8.03879C67.8617 8.02619 67.8757 8.0096 67.8853 7.99041C67.8949 7.97122 67.8999 7.94998 67.8998 7.92845V6.36563C67.9001 6.33654 67.891 6.30815 67.8741 6.28466C67.8572 6.26118 67.8333 6.24384 67.8059 6.23523C67.3194 6.08322 66.8126 6.00877 66.3036 6.01455C64.6333 6.01455 63.7497 6.97952 63.7497 8.80314V9.19635H62.8809C62.8457 9.19662 62.812 9.211 62.7872 9.23637C62.7624 9.26174 62.7485 9.29603 62.7485 9.33177V10.9347C62.7485 11.0099 62.8078 11.0711 62.8809 11.0711H63.7507V17.4348C63.7507 17.51 63.809 17.5702 63.8821 17.5702H65.6908C65.763 17.5702 65.8223 17.51 65.8223 17.4348V11.0701H67.5114L70.098 17.4317C69.8044 18.1008 69.5148 18.2342 69.1214 18.2342C68.8022 18.2342 68.4671 18.1359 68.1232 17.9433C68.1073 17.9346 68.0898 17.9292 68.0718 17.9275C68.0538 17.9257 68.0357 17.9277 68.0184 17.9333C68.0012 17.9395 67.9854 17.9491 67.9719 17.9617C67.9585 17.9743 67.9478 17.9896 67.9403 18.0065L67.3276 19.3858C67.3133 19.4168 67.3112 19.4522 67.3217 19.4848C67.3321 19.5174 67.3544 19.5447 67.3839 19.5613C67.9715 19.9033 68.6389 20.0787 69.3162 20.0689C70.6504 20.0689 71.3888 19.4309 72.0401 17.7136L75.1772 9.39697C75.1851 9.37633 75.1879 9.35406 75.1855 9.33206C75.1831 9.31005 75.1755 9.28896 75.1633 9.27058C75.1514 9.25244 75.1352 9.23756 75.1162 9.22724C75.0973 9.21693 75.0761 9.21149 75.0546 9.2114H73.1718C73.1441 9.21153 73.1172 9.22039 73.0947 9.23674C73.0722 9.25309 73.0553 9.27614 73.0462 9.30268L71.1179 14.9541L69.0058 9.29867C68.9965 9.27304 68.9797 9.25092 68.9576 9.23531C68.9355 9.21971 68.9092 9.21136 68.8823 9.2114H65.7926V9.21241ZM61.7729 9.20438H59.9642C59.929 9.20491 59.8954 9.21955 59.8708 9.2451C59.8462 9.27066 59.8325 9.30506 59.8328 9.3408V17.4348C59.8328 17.51 59.8921 17.5702 59.9652 17.5702H61.7739C61.8461 17.5702 61.9054 17.51 61.9054 17.4348V9.3398C61.9054 9.30406 61.8915 9.26976 61.8666 9.2444C61.8418 9.21903 61.8082 9.20464 61.7729 9.20438ZM60.8775 5.51902C60.5318 5.52114 60.2011 5.6624 59.958 5.91179C59.7148 6.16117 59.5792 6.49829 59.5807 6.84912C59.5798 7.023 59.6127 7.19536 59.6774 7.35636C59.7421 7.51736 59.8375 7.66384 59.958 7.78745C60.0785 7.91105 60.2218 8.00936 60.3797 8.07675C60.5377 8.14414 60.7071 8.1793 60.8785 8.18022C61.2243 8.1781 61.5552 8.0367 61.7983 7.7871C62.0415 7.53749 62.177 7.20012 62.1752 6.84912C62.1752 6.11385 61.5931 5.51902 60.8775 5.51902ZM76.7951 10.0099H76.464V10.4432H76.7951C76.9602 10.4432 77.059 10.3599 77.059 10.2265C77.059 10.0851 76.9602 10.0099 76.7951 10.0099ZM77.0096 10.6278L77.3704 11.1454H77.0659L76.7427 10.6709H76.464V11.1454H76.21V9.77414H76.805C77.1154 9.77414 77.3199 9.93764 77.3199 10.2115C77.3243 10.3067 77.2956 10.4005 77.2389 10.4765C77.1822 10.5526 77.1011 10.6061 77.0096 10.6278ZM76.7279 9.31873C76.0756 9.31873 75.5824 9.85037 75.5824 10.5014C75.5824 11.1514 76.0726 11.676 76.721 11.676C77.3733 11.676 77.8675 11.1444 77.8675 10.4934C77.8675 9.84335 77.3763 9.31873 76.7279 9.31873ZM76.721 11.8064C76.5529 11.806 76.3865 11.7719 76.2315 11.706C76.0764 11.6401 75.9357 11.5437 75.8175 11.4224C75.6993 11.3012 75.6058 11.1573 75.5426 10.9993C75.4794 10.8412 75.4475 10.672 75.449 10.5014C75.449 9.78517 76.0123 9.18833 76.7279 9.18833C76.896 9.18872 77.0624 9.22285 77.2174 9.28874C77.3725 9.35464 77.5132 9.451 77.6314 9.57229C77.7496 9.69358 77.8431 9.8374 77.9063 9.99547C77.9696 10.1535 78.0014 10.3228 77.9999 10.4934C77.9999 11.2096 77.4366 11.8074 76.721 11.8074V11.8064Z M19.0985 10.6382C15.2302 8.34115 8.85004 8.13001 5.15734 9.25061C4.56443 9.4307 3.93745 9.09586 3.75774 8.50285C3.57803 7.90967 3.91237 7.283 4.50579 7.10274C8.74454 5.81575 15.7911 6.06437 20.244 8.70775C20.7776 9.02438 20.9524 9.71333 20.6363 10.2458C20.3199 10.7793 19.6303 10.9549 19.0985 10.6382ZM17.6847 14.3488C14.4602 12.3664 9.54258 11.7923 5.72724 12.9502C5.23257 13.0996 4.71006 12.8208 4.55976 12.327C4.41084 11.8322 4.68965 11.3109 5.1838 11.1605C9.54206 9.83755 14.9602 10.4784 18.6638 12.7544C19.1038 13.0254 19.2424 13.6014 18.9717 14.0407C18.7003 14.481 18.1247 14.6191 17.6847 14.3488ZM16.475 17.5571C13.657 15.8349 10.1104 15.446 5.93306 16.4002C5.53058 16.4923 5.12966 16.2401 5.03782 15.8377C4.94546 15.4352 5.19677 15.0339 5.60011 14.9421C10.1715 13.8972 14.0923 14.3469 17.2554 16.2796C17.6079 16.4949 17.7191 16.9557 17.5034 17.3084C17.2879 17.6619 16.8275 17.7727 16.475 17.5571ZM0 11.9998C0 18.6277 5.37285 24 12 24C18.6277 24 24 18.6277 24 11.9998C24 5.37264 18.6277 0 12 0C5.37285 0 0 5.37264 0 11.9998Z"></path></svg><br></br>
    <h6><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
    <path d="M10 18L14 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M2.35139 13.2135C1.99837 10.9162 1.82186 9.76763 2.25617 8.74938C2.69047 7.73112 3.65403 7.03443 5.58114 5.64106L7.02099 4.6C9.41829 2.86667 10.6169 2 12 2C13.3831 2 14.5817 2.86667 16.979 4.6L18.4189 5.64106C20.346 7.03443 21.3095 7.73112 21.7438 8.74938C22.1781 9.76763 22.0016 10.9162 21.6486 13.2135L21.3476 15.1724C20.8471 18.4289 20.5969 20.0572 19.429 21.0286C18.2611 22 16.5537 22 13.1388 22H10.8612C7.44633 22 5.73891 22 4.571 21.0286C3.40309 20.0572 3.15287 18.4289 2.65243 15.1724L2.35139 13.2135Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
</svg>Home</h6>
<h6><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
    <path d="M14 14L16.5 16.5" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
    <path d="M16.4333 18.5252C15.8556 17.9475 15.8556 17.0109 16.4333 16.4333C17.0109 15.8556 17.9475 15.8556 18.5252 16.4333L21.5667 19.4748C22.1444 20.0525 22.1444 20.9891 21.5667 21.5667C20.9891 22.1444 20.0525 22.1444 19.4748 21.5667L16.4333 18.5252Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    <path d="M16 9C16 5.13401 12.866 2 9 2C5.13401 2 2 5.13401 2 9C2 12.866 5.13401 16 9 16C12.866 16 16 12.866 16 9Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
</svg>Search</h6>
<h6><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
    <path d="M2 3L20 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M2 10L15 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M2 17L9 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M18.25 19C18.25 20.6569 16.8509 22 15.125 22C13.3991 22 12 20.6569 12 19C12 17.3431 13.3991 16 15.125 16C16.8509 16 18.25 17.3431 18.25 19ZM18.25 19V10C18.6667 10.6 19 13.12 22 13.6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>Library</h6>
<h6><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
    <path d="M2.5 7.5H21.5" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
    <path d="M17 2.5L14 7.5" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
    <path d="M10 2.5L7 7.5" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
    <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" stroke-width="1.5" />
    <path d="M14.9531 14.8948C14.8016 15.5215 14.0857 15.9644 12.6539 16.8502C11.2697 17.7064 10.5777 18.1346 10.0199 17.9625C9.78934 17.8913 9.57925 17.7562 9.40982 17.57C9 17.1198 9 16.2465 9 14.5C9 12.7535 9 11.8802 9.40982 11.4299C9.57925 11.2438 9.78934 11.1087 10.0199 11.0375C10.5777 10.8654 11.2697 11.2936 12.6539 12.1498C14.0857 13.0356 14.8016 13.4785 14.9531 14.1052C15.0156 14.3639 15.0156 14.6361 14.9531 14.8948Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
</svg>Playlist</h6>
<h6><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
    <path d="M13.7276 3.44418L15.4874 6.99288C15.7274 7.48687 16.3673 7.9607 16.9073 8.05143L20.0969 8.58575C22.1367 8.92853 22.6167 10.4206 21.1468 11.8925L18.6671 14.3927C18.2471 14.8161 18.0172 15.6327 18.1471 16.2175L18.8571 19.3125C19.417 21.7623 18.1271 22.71 15.9774 21.4296L12.9877 19.6452C12.4478 19.3226 11.5579 19.3226 11.0079 19.6452L8.01827 21.4296C5.8785 22.71 4.57865 21.7522 5.13859 19.3125L5.84851 16.2175C5.97849 15.6327 5.74852 14.8161 5.32856 14.3927L2.84884 11.8925C1.389 10.4206 1.85895 8.92853 3.89872 8.58575L7.08837 8.05143C7.61831 7.9607 8.25824 7.48687 8.49821 6.99288L10.258 3.44418C11.2179 1.51861 12.7777 1.51861 13.7276 3.44418Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>Favourite</h6>


</div>
    </div>
  );
}

function TopNavbar() {
  return (
    <div className="top-navbar">
      
     
        <a href="" className="login">Log in</a>
        <a href className="signin">Sign up</a>
      </div>
    
  );
}

function Footer({ currentMusicDetails, isAudioPlaying, handleAudioPlay }) {
  return (
    <div className="navbar">
      <img  alt="song Avatar" id='songAvatar' onClick={handleAudioPlay} />
      <p>{currentMusicDetails.songName}</p>
      <p>{currentMusicDetails.songArtist}</p>
      <i className={`fa-solid ${isAudioPlaying ? 'fa-pause-circle' : 'fa-circle-play'} playBtn`} onClick={handleAudioPlay}></i>
    </div>
  );
}

function App() {
  const [currentMusicDetails, setCurrentMusicDetails] = useState({
    songName: 'Ram sia ram',
    songArtist: 'Adipurush',
    songSrc: './Assets/songs/Ram Siya Ram Adipurush 320 Kbps.mp3',
    songAvatar: './Assets/Images/song1.png'
  });

  // UseStates Variables
  const [audioProgress, setAudioProgress] = useState(0);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [musicIndex, setMusicIndex] = useState(0);
  const [musicTotalLength, setMusicTotalLength] = useState('03 : 50');
  const [musicCurrentTime, setMusicCurrentTime] = useState('00 : 00');
  const [videoIndex, setVideoIndex] = useState(0);
  const [activeMenu, setActiveMenu] = useState("home");

  const currentAudio = useRef();

  const handleMusicProgressBar = (e) => {
    setAudioProgress(e.target.value);
    currentAudio.current.currentTime = (e.target.value * currentAudio.current.duration) / 100;
  };

  // Play Audio Function
  const handleAudioPlay = () => {
    if (currentAudio.current.paused) {
      currentAudio.current.play();
      setIsAudioPlaying(true);
    } else {
      currentAudio.current.pause();
      setIsAudioPlaying(false);
    }
  };

  // Function to handle the next song
  const handleNextSong = () => {
    if (musicIndex >= musicAPI.length - 1) {
      let setNumber = 0;
      setMusicIndex(setNumber);
      updateCurrentMusicDetails(setNumber);
    } else {
      let setNumber = musicIndex + 1;
      setMusicIndex(setNumber);
      updateCurrentMusicDetails(setNumber);
    }
  };

  // Function to handle the previous song
  const handlePrevSong = () => {
    if (musicIndex === 0) {
      let setNumber = musicAPI.length - 1;
      setMusicIndex(setNumber);
      updateCurrentMusicDetails(setNumber);
    } else {
      let setNumber = musicIndex - 1;
      setMusicIndex(setNumber);
      updateCurrentMusicDetails(setNumber);
    }
  };

  const musicAPI = [
    {
      songName: 'Ram sia Ram',
      songArtist: 'Adipurush',
      songSrc: './Assets/songs/Ram Siya Ram Adipurush 320 Kbps.mp3',
      songAvatar: './Assets/Images/song1.png'
    },
    {
      songName: 'Gulabi ankehan',
      songArtist: 'Sanam',
      songSrc: './Assets/songs/Gulabi Aankhen Universally Sanam 320 Kbps.mp3',
      songAvatar: './Assets/Images/song2.png'
    },
    {
      songName: 'Chaleya ',
      songArtist: 'Javan',
      songSrc: './Assets/songs/Chaleya Jawan 320 Kbps.mp3',
      songAvatar: './Assets/Images/song3.png'
    },
    {
      songName: 'O-Mere-Dil-Ke-Chain',
      songArtist: 'Sanam',
      songSrc: './Assets/songs/O-Mere-Dil-Ke-Chain_320(PaglaSongs).mp3',
      songAvatar: './Assets/Images/song4.png'
    },
    {
      songName: 'Guitar sokhda',
      songArtist: 'Jassi gill',
      songSrc: './Assets/songs/Guitar_Sikhda_1.mp3',
      songAvatar: './Assets/Images/song5.png'
    },
    {
      songName: 'Soch ',
      songArtist: 'Hardy Sandhu',
      songSrc: './Assets/songs/SOCH(Slowed+Reverbed) __ Hardy Sandhu.webm',
      songAvatar: './Assets/Images/image6.jpg'
    },
    {
      songName: 'Apna Bana Le',
      songArtist: 'Arijit Singh',
      songSrc: './Assets/songs/Apna Bana Le - Full Audio _ Bhediya _ Varun Dhawan, Kriti Sanon_ Sachin-Jigar,Arijit Singh,Amitabh B.webm',
      songAvatar: './Assets/Images/image7.jpg'
    },{
      songName: 'Lover',
      songArtist: 'Diljit Dosangh',
      songSrc: './Assets/songs/Lover_320(PaglaSongs).mp3',
      songAvatar: './Assets/Images/lover.png'
    }
    ,{
      songName: 'Goat',
      songArtist: 'Diljit Dosangh',
      songSrc: './Assets/songs/new_320_G.O.A.T.  - Diljit Dosanjh.mp3',
      songAvatar: './Assets/Images/goat.png'
    },
    {
      songName: 'Apna Bana Le',
      songArtist: 'Arijit Singh',
      songSrc: './Assets/songs/Apna Bana Le - Full Audio _ Bhediya _ Varun Dhawan, Kriti Sanon_ Sachin-Jigar,Arijit Singh,Amitabh B.webm',
      songAvatar: './Assets/Images/image7.jpg'
    },{
      songName: 'Lover',
      songArtist: 'Diljit Dosangh',
      songSrc: './Assets/songs/Lover_320(PaglaSongs).mp3',
      songAvatar: './Assets/Images/lover.png'
    }
    ,{
      songName: 'Goat',
      songArtist: 'Diljit Dosangh',
      songSrc: './Assets/songs/new_320_G.O.A.T.  - Diljit Dosanjh.mp3',
      songAvatar: './Assets/Images/goat.png'
    },
    {
      songName: 'Apna Bana Le',
      songArtist: 'Arijit Singh',
      songSrc: './Assets/songs/Apna Bana Le - Full Audio _ Bhediya _ Varun Dhawan, Kriti Sanon_ Sachin-Jigar,Arijit Singh,Amitabh B.webm',
      songAvatar: './Assets/Images/image7.jpg'
    },{
      songName: 'Lover',
      songArtist: 'Diljit Dosangh',
      songSrc: './Assets/songs/Lover_320(PaglaSongs).mp3',
      songAvatar: './Assets/Images/lover.png'
    }
    ,{
      songName: 'Goat',
      songArtist: 'Diljit Dosangh',
      songSrc: './Assets/songs/new_320_G.O.A.T.  - Diljit Dosanjh.mp3',
      songAvatar: './Assets/Images/goat.png'
    }
    
  ];

  const updateCurrentMusicDetails = (number) => {
    let musicObject = musicAPI[number];
    currentAudio.current.src = musicObject.songSrc;
    currentAudio.current.play();
    setCurrentMusicDetails({
      songName: musicObject.songName,
      songArtist: musicObject.songArtist,
      songSrc: musicObject.songSrc,
      songAvatar: musicObject.songAvatar
    });
    setIsAudioPlaying(true);
  };

  const handleAudioUpdate = () => {
    // Input total length of the audio
    let minutes = Math.floor(currentAudio.current.duration / 60);
    let seconds = Math.floor(currentAudio.current.duration % 60);
    let musicTotalLength0 = `${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}` : seconds}`;
    setMusicTotalLength(musicTotalLength0);

    // Input Music Current Time
    let currentMin = Math.floor(currentAudio.current.currentTime / 60);
    let currentSec = Math.floor(currentAudio.current.currentTime % 60);
    let musicCurrentT = `${currentMin < 10 ? `0${currentMin}` : currentMin} : ${currentSec < 10 ? `0${currentSec}` : currentSec}`;
    setMusicCurrentTime(musicCurrentT);

    const progress = parseInt((currentAudio.current.currentTime / currentAudio.current.duration) * 100);
    setAudioProgress(isNaN(progress) ? 0 : progress);
  };

  const vidArray = ['./Assets/Videos/video1.mp4','./Assets/Videos/video2.mp4','./Assets/Videos/video3.mp4','./Assets/Videos/video4.mp4','./Assets/Videos/video5.mp4','./Assets/Videos/video6.mp4'];

  

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    // Handle menu clicks here
  };

  const Card = ({ song }) => {
    const handlePlayPause = () => {
      if (currentMusicDetails.songSrc === song.songSrc) {
        handleAudioPlay();
      } else {
        updateCurrentMusicDetails(musicAPI.findIndex(item => item.songSrc === song.songSrc));
      }
    };

    return (
      <div className="card">
        <p className='music-Head-Name'>{song.songName}</p>
        <p className='music-Artist-Name'>{song.songArtist}</p>
        <img src={song.songAvatar} onClick={handlePlayPause} alt="song Avatar" id='songAvatar'/>
      </div>
    );
  };

  return (
    <>
      <SideMenu handleMenuClick={handleMenuClick} />
      <div className="container">
        <audio src={currentMusicDetails.songSrc} ref={currentAudio} onEnded={handleNextSong} onTimeUpdate={handleAudioUpdate}></audio>
        <video src={vidArray[videoIndex]} loop muted autoPlay className='backgroundVideo'></video>
        <div className="blackScreen"></div>
        <TopNavbar />
        <Footer currentMusicDetails={currentMusicDetails} isAudioPlaying={isAudioPlaying} handleAudioPlay={handleAudioPlay} />
        <div className="music-Container">
          <div className="musicTimerDiv">
            <p className='musicCurrentTime'>{musicCurrentTime}</p>
            <p className='musicTotalLenght'>{musicTotalLength}</p>
          </div>
          <input type="range" name="musicProgressBar" className='musicProgressBar' value={audioProgress} onChange={handleMusicProgressBar} />
          <div className="musicControlers">
            <i className='fa-solid fa-backward musicControler' onClick={handlePrevSong}></i>
            <i className={`fa-solid ${isAudioPlaying? 'fa-pause-circle' : 'fa-circle-play'} playBtn`} onClick={handleAudioPlay}></i>
            <i className='fa-solid fa-forward musicControler' onClick={handleNextSong}></i>
          </div>
        </div>
      </div>
      <div className="card-container">
        {musicAPI.map((song, index) => (
          <Card key={index} song={song} />
        ))}
      </div>
    </>
  );
}

export default App;
