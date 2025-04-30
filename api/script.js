export default function handler(req, res) {
  const key = req.query.key;

  if (key !== "123456") {
    return res.status(403).send("-- ❌ Key ผิด หรือไม่ได้รับอนุญาต");
  }

  const luaScript = `
    print("✅ โหลด Lua Script จาก Vercel แล้ว")
    -- เขียนโค้ด Lua ของคุณตรงนี้
    game:GetService("Players").LocalPlayer:Kick("แค่ทดสอบนะครับ")
  `;

  res.setHeader("Content-Type", "text/plain");
  res.send(luaScript);
}
