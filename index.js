

const a_sample_readme_block = async (req, res) => {

  // health check
  if (req.params["health"] === "health") {
    res.write(JSON.stringify({success: true, msg: "Health check success"}))
    res.end()
  }

  // Add your code here
  res.write(JSON.stringify({success: true, msg: `Hello a_sample_readme_block`}))
  res.end()
  
}

export default a_sample_readme_block
