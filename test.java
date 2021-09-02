import java.io.*;
import java.security.*;
import java.sql.*;
import java.util.*;
import java.util.zip.*;
// import org.apache.commons.io.FileUtils;

public class test {
	public static void main(String[] args) throws Exception {
		System.out.println("Hello, world");
		// command injection
		Process process = Runtime.getRuntime().exec(args[1]);
		// path traversal
		File f = new File(args[1]);
		FileInputStream fis = new FileInputStream(f);
		int r = 0;
		while ((r = fis.read()) != -1) {
			System.out.print((char)r);
		}
		// SQL injection
		Connection c = DriverManager.getConnection(args[1], args[1], args[1]);
		Statement stmt = c.createStatement();
		stmt.executeUpdate("DELETE FROM " + args[1]);
		c.close();
	}

	// https://rules.sonarsource.com/java/type/Vulnerability
	/*public static List<String> zipSlipNoncompliant(ZipFile zipFile) throws IOException {
		Enumeration<? extends ZipEntry> entries = zipFile.entries();
		List<String> filesContent = new ArrayList<>();
		while (entries.hasMoreElements()) {
			ZipEntry entry = entries.nextElement();
			File file = new File(entry.getName());
			String content = FileUtils.readFileToString(file, StandardCharsets.UTF_8); // Noncompliant
			filesContent.add(content);
		}
		return filesContent;
	}*/

}
