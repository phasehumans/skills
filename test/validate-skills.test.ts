import { describe, expect, test } from 'bun:test'
import fs from 'node:fs'
import path from 'node:path'

describe('Validate Skill Packages', () => {
    const skillsDir = path.resolve(__dirname, '../skills')
    const skillFolders = fs
        .readdirSync(skillsDir, { withFileTypes: true })
        .filter((d) => d.isDirectory())
        .map((d) => d.name)

    test('should have at least 5 core playbooks', () => {
        expect(skillFolders.length).toBeGreaterThanOrEqual(5)
    })

    for (const folder of skillFolders) {
        test(`skill '${folder}' satisfies SKILL.md specification`, () => {
            const skillMdPath = path.join(skillsDir, folder, 'SKILL.md')
            expect(fs.existsSync(skillMdPath)).toBe(true)

            const content = fs.readFileSync(skillMdPath, 'utf8')
            expect(content.startsWith('---')).toBe(true)

            const endFrontmatter = content.indexOf('\n---', 3)
            expect(endFrontmatter).toBeGreaterThan(3)

            const frontmatter = content.slice(3, endFrontmatter)
            expect(frontmatter).toContain(`name: ${folder}`)
            expect(frontmatter).toContain('description:')

            // Ensure body exists after frontmatter
            const body = content.slice(endFrontmatter + 4).trim()
            expect(body.length).toBeGreaterThan(50)
        })
    }
})
