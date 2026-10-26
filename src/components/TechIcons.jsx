import React from 'react';

// 1. HTML5 Shield Logo
export const HtmlIcon = ({ size = 48, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M71.5 460.5L34.5 45H477.5L440.5 460.5L256 512L71.5 460.5Z" fill="#E44D26" />
    <path d="M256 472.5L407.5 430.5L438 88H256V472.5Z" fill="#F16529" />
    <path d="M256 208.5H168.5L162.5 141H256V88H104L121 261.5H256V208.5ZM256 348.5L255.5 349L193 332L189 287H136L143.5 373L256 404V348.5Z" fill="#EBEBEB" />
    <path d="M255.5 261.5H343.5L335 348.5L255.5 370.5V426L368 395L383 208.5H255.5V261.5ZM255.5 88V141H401L406 88H255.5Z" fill="#FFFFFF" />
  </svg>
);

// 2. CSS3 Shield Logo
export const CssIcon = ({ size = 48, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M71.5 460.5L34.5 45H477.5L440.5 460.5L256 512L71.5 460.5Z" fill="#1572B6" />
    <path d="M256 472.5L407.5 430.5L438 88H256V472.5Z" fill="#33A9DC" />
    <path d="M256 208.5H168.5L162.5 141H256V88H104L121 261.5H256V208.5ZM256 348.5L255.5 349L193 332L189 287H136L143.5 373L256 404V348.5Z" fill="#EBEBEB" />
    <path d="M255.5 208.5V261.5H340L332 348.5L255.5 369V424.5L367 393.5L382 208.5H255.5ZM255.5 88V141H388L393 88H255.5Z" fill="#FFFFFF" />
  </svg>
);

// 3. Sass Script Logo
export const SassIcon = ({ size = 48, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <g transform="translate(40, 90)">
      <path
        d="M216.5 148.5C216.5 130 205.5 116 182 116C153 116 137.5 137 137.5 158.5C137.5 186.5 158 200 178 205.5C198 211 206 218 206 228C206 239.5 194 248.5 178 248.5C158 248.5 146.5 237.5 145.5 221H115C116 254 139 276 177.5 276C212 276 238 256.5 238 226C238 198 217.5 184.5 195 178.5C175 173 168.5 167 168.5 157C168.5 148 176 142 185 142C195.5 142 202 147.5 203 158.5L216.5 148.5Z"
        fill="#CF649A"
      />
      <path
        d="M32.5 180C32.5 115 78.5 68 148 68C194 68 227 92 240 128L212 140C202 116 179 97 148 97C95 97 64 133 64 180C64 227 95 263 148 263C182 263 205 241 214 214L242 225C229 265 194 292 148 292C78.5 292 32.5 245 32.5 180Z"
        fill="#CF649A"
      />
      <path
        d="M352 172C352 153.5 341 139.5 317.5 139.5C288.5 139.5 273 160.5 273 182C273 210 293.5 223.5 313.5 229C333.5 234.5 341.5 241.5 341.5 251.5C341.5 263 329.5 272 313.5 272C293.5 272 282 261 281 244.5H250.5C251.5 277.5 274.5 299.5 313 299.5C347.5 299.5 373.5 280 373.5 249.5C373.5 221.5 353 208 330.5 202C310.5 196.5 304 190.5 304 180.5C304 171.5 311.5 165.5 320.5 165.5C331 165.5 337.5 171 338.5 182L352 172Z"
        fill="#CF649A"
      />
    </g>
  </svg>
);

// 4. JavaScript Yellow Badge Logo
export const JsIcon = ({ size = 48, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="512" height="512" rx="90" fill="#F7DF1E" />
    <path
      d="M174.5 397C191 397 202 388 208 375L209 308H165V356C165 365 158 370 148 370C136 370 128 363 128 350V250H84V355C84 382 104 397 138 397H174.5ZM334 397C378 397 406 374 406 337C406 298 381 283 346 270L331 264C310 256 300 248 300 234C300 219 313 209 332 209C351 209 363 218 368 235L404 220C395 186 369 170 331 170C290 170 258 193 258 234C258 271 282 287 318 300L333 306C356 315 364 324 364 338C364 355 348 366 329 366C306 366 292 353 284 333L245 352C256 384 288 397 334 397Z"
      fill="#000000"
    />
  </svg>
);

// 5. React.js Cyan Atom Logo
export const ReactIcon = ({ size = 48, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="256" cy="256" r="38" fill="#61DAFB" />
    <ellipse cx="256" cy="256" rx="200" ry="76" stroke="#61DAFB" strokeWidth="22" />
    <ellipse cx="256" cy="256" rx="200" ry="76" stroke="#61DAFB" strokeWidth="22" transform="rotate(60 256 256)" />
    <ellipse cx="256" cy="256" rx="200" ry="76" stroke="#61DAFB" strokeWidth="22" transform="rotate(120 256 256)" />
  </svg>
);

// 6. GitHub White Octocat Badge
export const GithubSkillIcon = ({ size = 48, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="512" height="512" rx="90" fill="#24292E" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M256 90C164.3 90 90 164.3 90 256C90 329.3 137.6 391.6 203.7 413.6C212 415.1 215.1 410 215.1 405.6C215.1 401.7 215 391.3 214.9 377.7C168.7 387.7 159 355.4 159 355.4C151.4 336.2 140.5 331 140.5 331C125.4 320.7 141.6 320.9 141.6 320.9C158.3 322.1 167.1 338 167.1 338C181.9 363.4 206 356 215.4 351.8C216.9 341 221.2 333.7 226 329.5C189.1 325.3 150.3 311 150.3 247.4C150.3 229.3 156.8 214.5 167.4 202.9C165.7 198.7 160 181.9 169 159.1C169 159.1 183 154.6 214.7 176.1C227.9 172.4 242 170.6 256 170.5C270 170.6 284.1 172.4 297.3 176.1C329 154.6 343 159.1 343 159.1C352 181.9 346.3 198.7 344.6 202.9C355.3 214.5 361.7 229.3 361.7 247.4C361.7 311.2 322.8 325.2 285.8 329.3C291.7 334.4 297 344.4 297 359.8C297 381.8 296.8 399.6 296.8 405.6C296.8 410.1 299.8 415.3 308.3 413.6C374.3 391.5 422 329.3 422 256C422 164.3 347.7 90 256 90Z"
      fill="#FFFFFF"
    />
  </svg>
);

// 7. Node.js Green Hexagon Logo
export const NodeIcon = ({ size = 48, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M256 64L416 156.4V341.2L256 433.6L96 341.2V156.4L256 64Z"
      fill="#333333"
    />
    <path
      d="M256 78L404 163.4V334.2L256 419.6L108 334.2V163.4L256 78Z"
      fill="#539E43"
    />
    {/* Stylized Node.js Typography */}
    <g transform="translate(140, 200)">
      <path
        d="M24 64V-14H46V10C54 2 66 -4 80 -4C108 -4 126 14 126 44V64H104V44C104 26 94 16 78 16C62 16 46 26 46 44V64H24Z"
        fill="#FFFFFF"
      />
      <circle cx="170" cy="30" r="32" fill="#FFFFFF" fillOpacity="0.95" />
      <circle cx="170" cy="30" r="16" fill="#539E43" />
    </g>
  </svg>
);

// 8. Firebase Flame Logo
export const FirebaseIcon = ({ size = 48, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M96 384L216 64L268 168L96 384Z" fill="#FFA000" />
    <path d="M304 128L416 384L96 384L304 128Z" fill="#F57C00" />
    <path d="M268 168L336 248L96 384L268 168Z" fill="#FFCA28" />
  </svg>
);

// 9. MongoDB Green Leaf Logo
export const MongoIcon = ({ size = 48, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M256 32C256 32 128 174 128 298C128 376 186 440 256 480C326 440 384 376 384 298C384 174 256 32 256 32Z"
      fill="#47A248"
    />
    <path
      d="M256 32C256 32 250 120 250 298C250 376 253 440 256 480C326 440 384 376 384 298C384 174 256 32 256 32Z"
      fill="#499D4A"
    />
    <path
      d="M256 480V32C256 32 255 120 255 298C255 376 255.5 440 256 480Z"
      stroke="#13AA52"
      strokeWidth="4"
    />
  </svg>
);

// 10. Docker Blue Whale Logo
export const DockerIcon = ({ size = 48, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Containers */}
    <g fill="#2496ED">
      <rect x="180" y="110" width="38" height="38" rx="4" />
      <rect x="228" y="110" width="38" height="38" rx="4" />
      <rect x="276" y="110" width="38" height="38" rx="4" />

      <rect x="132" y="158" width="38" height="38" rx="4" />
      <rect x="180" y="158" width="38" height="38" rx="4" />
      <rect x="228" y="158" width="38" height="38" rx="4" />
      <rect x="276" y="158" width="38" height="38" rx="4" />
      <rect x="324" y="158" width="38" height="38" rx="4" />

      <rect x="180" y="206" width="38" height="38" rx="4" />
      <rect x="228" y="206" width="38" height="38" rx="4" />
      <rect x="276" y="206" width="38" height="38" rx="4" />
      <rect x="324" y="206" width="38" height="38" rx="4" />

      {/* Whale body */}
      <path d="M472 248C460 248 440 258 430 268C398 250 354 246 320 248C308 248 80 248 50 300C30 334 50 380 90 398C154 426 380 430 442 360C480 316 498 266 472 248Z" />
      <circle cx="120" cy="330" r="10" fill="#FFFFFF" />
    </g>
  </svg>
);

// 11. C++ Hexagon Badge
export const CppIcon = ({ size = 48, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M256 36L448 146V366L256 476L64 366V146L256 36Z" fill="#00599C" />
    <path d="M256 56L430 156V356L256 456L82 356V156L256 56Z" fill="#004482" />
    <path
      d="M236 324C198 324 168 294 168 256C168 218 198 188 236 188C262 188 284 202 294 224L262 238C256 226 248 220 236 220C216 220 200 236 200 256C200 276 216 292 236 292C248 292 256 286 262 274L294 288C284 310 262 324 236 324ZM316 246H334V228H352V246H370V264H352V282H334V264H316V246ZM376 246H394V228H412V246H430V264H412V282H394V264H376V246Z"
      fill="#FFFFFF"
    />
  </svg>
);

// 12. Python Intertwined Snakes
export const PythonIcon = ({ size = 48, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M253 45C170 45 175 81 175 81L175 119H257V131H143C143 131 82 124 82 207C82 290 135 284 135 284H167V246C167 246 165 200 211 200H293C293 200 334 202 334 161V79C334 79 342 45 253 45ZM218 78C227 78 234 85 234 94C234 103 227 110 218 110C209 110 202 103 202 94C202 85 209 78 218 78Z"
      fill="#3776AB"
    />
    <path
      d="M259 467C342 467 337 431 337 431L337 393H255V381H369C369 381 430 388 430 305C430 222 377 228 377 228H345V266C345 266 347 312 301 312H219C219 312 178 310 178 351V433C178 433 170 467 259 467ZM294 434C285 434 278 427 278 418C278 409 285 402 294 402C303 402 310 409 310 418C310 427 303 434 294 434Z"
      fill="#FFD43B"
    />
  </svg>
);

// 13. TypeScript Blue Square Badge
export const TsIcon = ({ size = 48, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="512" height="512" rx="90" fill="#3178C6" />
    <path
      d="M258 244V284H208V412H156V284H106V244H258ZM348 416C312 416 280 400 270 376L308 350C316 364 330 374 348 374C366 374 376 366 376 354C376 338 358 332 334 322C302 308 276 292 276 256C276 220 308 196 350 196C382 196 406 208 420 230L386 256C376 244 366 238 350 238C336 238 326 244 326 254C326 268 344 274 368 284C402 298 426 316 426 352C426 392 392 416 348 416Z"
      fill="#FFFFFF"
    />
  </svg>
);

// 14. Tailwind CSS Wave Logo
export const TailwindIcon = ({ size = 48, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M256 160C208 160 176 184 160 232C184 208 212 200 244 208C262 212 276 226 290 242C314 268 342 298 400 298C448 298 480 274 496 226C472 250 444 258 412 250C394 246 380 232 366 216C342 190 314 160 256 160ZM112 274C64 274 32 298 16 346C40 322 68 314 100 322C118 326 132 340 146 356C170 382 198 412 256 412C304 412 336 388 352 340C328 364 300 372 268 364C250 360 236 346 222 330C198 304 170 274 112 274Z"
      fill="#38BDF8"
    />
  </svg>
);

// 15. Express.js Emblem Logo
export const ExpressIcon = ({ size = 48, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="512" height="512" rx="90" fill="#1C1F26" />
    <path
      d="M130 190H214V226H168V260H208V294H168V330H216V366H130V190ZM254 286L304 190H344L284 280L348 366H308L264 298L240 334V366H204V190H240V286H254Z"
      fill="#FFFFFF"
    />
    <circle cx="390" cy="278" r="14" fill="#00E5FF" />
  </svg>
);

// 16. MySQL Database Logo
export const MysqlIcon = ({ size = 48, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="512" height="512" rx="90" fill="#0F172A" />
    <path
      d="M374 200C348 150 290 120 228 136C186 148 154 180 142 220C128 268 142 320 180 354C216 384 270 392 314 374C336 364 354 348 366 328L330 306C320 322 306 334 290 342C258 356 220 350 194 328C168 304 158 266 168 232C178 202 200 180 230 172C274 160 316 182 334 218L374 200Z"
      fill="#00758F"
    />
    <path d="M360 240L410 200L420 260L360 240Z" fill="#F29111" />
  </svg>
);

// 17. AWS Cloud Logo (Matching User Reference: Navy tile, lowercase aws, orange smile)
export const AwsIcon = ({ size = 48, className = '' }) => (
  <img
    src="/aws_logo.png"
    alt="AWS Logo"
    width={size}
    height={size}
    className={className}
    style={{
      width: `${size}px`,
      height: `${size}px`,
      borderRadius: '8px',
      objectFit: 'cover',
      display: 'block'
    }}
  />
);

// 18. Gemini AI Star Logo
export const GeminiIcon = ({ size = 48, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="geminiGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#4E85EB" />
        <stop offset="50%" stopColor="#9B72CF" />
        <stop offset="100%" stopColor="#E76274" />
      </linearGradient>
    </defs>
    <path
      d="M256 32C256 156 156 256 32 256C156 256 256 356 256 480C256 356 356 256 480 256C356 256 256 156 256 32Z"
      fill="url(#geminiGrad)"
    />
  </svg>
);
