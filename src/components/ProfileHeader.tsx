import Image from "next/image";

export function ProfileHeader() {
  return (
    <div className="bg-gray-800 rounded-lg p-6 mb-6">
      <div className="flex items-start gap-6">
        {/* Profile Picture */}
        <div className="flex-shrink-0">
          <div className="w-24 h-24 rounded-full bg-blue-400 flex items-center justify-center overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-2xl font-bold">
              AP
            </div>
          </div>
        </div>

        {/* Name and Roles */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-white mb-2">Aditya Pratama</h1>
          <p className="text-gray-400 mb-4">DevOps | SRE | Cloud Engineer</p>

          {/* Social Icons */}
          <div className="flex gap-3 mb-4">
            {["Facebook", "Twitter", "Instagram", "LinkedIn", "GitHub"].map(
              (social) => (
                <div
                  key={social}
                  className="w-8 h-8 rounded bg-gray-700 flex items-center justify-center hover:bg-gray-600 cursor-pointer transition-colors"
                >
                  <span className="text-xs text-gray-300">{social[0]}</span>
                </div>
              )
            )}
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-3 text-sm">
          <div className="flex items-center gap-2 text-gray-300">
            <span>📧</span>
            <span>EMAIL:</span>
            <a
              href="mailto:aditya@adityacprtm.dev"
              className="text-blue-400 hover:underline"
            >
              aditya@adityacprtm.dev
            </a>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <span>📄</span>
            <span>CV:</span>
            <button className="text-blue-400 hover:underline">Download</button>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <span>📍</span>
            <span>LOCATION:</span>
            <span>Jakarta, ID</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <span>STATUS:</span>
            <span>🍉</span>
          </div>
        </div>
      </div>
    </div>
  );
}

